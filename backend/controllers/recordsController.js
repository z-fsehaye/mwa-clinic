const auth = require('../security/auth')
const { ObjectId } = require('mongodb');
const { ObjectID } = require('bson');

module.exports.addRecord = async (req, res, next) => {
    let requestRecord = req.body;
    let user = auth.getLoggedInUser(req.headers['token'])

    let record = {
        'patientInfo': {
            'fullname': requestRecord.fullname,
            'address': requestRecord.address,
            'email': requestRecord.email,
            'dob': requestRecord.dob,
            'gen': requestRecord.gen,
            'doctor': { 'doctorName': user.fullname, 'doctorEmail': user.email }
        },
        'visits': []
    }

    let result = await req.db.collection('records').insertOne(record);
    if (result.acknowledged) {
        res.json({ success: true })
    }
    else {
        res.json({ success: false })
    }

}

module.exports.updateRecord = async (req, res, next) => {

    let token = req.headers['token']
    let loggedInUser = auth.getLoggedInUser(token);
    let requestRecord = req.body;


    let record = {
        'patientInfo': {
            'fullname': requestRecord.fullname,
            'address': requestRecord.address,
            'email': requestRecord.email,
            'dob': requestRecord.dob,
            'gen': requestRecord.gen,
            'doctor': { 'doctorName': requestRecord.doctorName, 'doctorEmail': requestRecord.doctorEmail }
        },
        'visits': requestRecord.visits
    }
    console.log(record)

    let result = await req.db.collection('records')
        .updateOne({ 'patientInfo.email': req.params.p_email, 'patientInfo.doctor.doctorEmail': loggedInUser.email }, { $set: { 'patientInfo': record.patientInfo, 'visits': record.visits } });
    console.log(result)
    if (result.modifiedCount == 1) {
        res.json({ success: true })
    }
    else {
        res.json({ success: false })
    }
}

module.exports.addVisit = async (req, res, next) => {
    let visit = {
        _id: ObjectId(),
        date: req.body.date,
        prescription: req.body.prescription,
        reason: req.body.reason,
        diagnosis: req.body.diagnosis
    }
    let result = await req.db.collection('records').updateOne({ 'patientInfo.email': req.params.p_email }, { $push: { visits: visit } })
    res.json(result);
}

module.exports.getRecordByPatientEmail = async (req, res, next) => {

    let token = req.headers['token']
    let loggedInUser = auth.getLoggedInUser(token);
    let record;

    if (loggedInUser.role == 'DOCTOR') {
        record = await req.db.collection('records').findOne({ 'patientInfo.email': req.params.p_email, 'patientInfo.doctor.doctorEmail': loggedInUser.email })
    }
    else if (loggedInUser.role == 'PATIENT') {
        record = await req.db.collection('records').findOne({ 'patientInfo.email': loggedInUser.email })
    }
    else {
        record = null
    }


    if (!record) {
        res.json({ message: "No record found!" })
    }
    else {
        res.json(record)
    }
}

module.exports.getPatientRecordsForDoctor = async (req, res, next) => {
    let user = auth.getLoggedInUser(req.headers['token'])
    let records = await req.db.collection('records').find({ 'patientInfo.doctor.doctorEmail': user.email }).toArray();
    if (records) {
        res.json(records)
    }
    else {
        res.json({ message: 'No records found!' })
    }
}

module.exports.getPatientVisitById = async (req, res, next) => {
    let token = req.headers['token']
    let loggedInUser = auth.getLoggedInUser(token);

    let visit;

    if (loggedInUser.role == "DOCTOR") {
        visit = await req.db.collection('records').findOne({
            'patientInfo.email': req.params.p_email,
            'patientInfo.doctor.doctorEmail': loggedInUser.email,
            'visits._id': ObjectID(req.params.visit_id)
        }, { projection: { _id: 0, 'visits.$': 1 } })
    }
    else if (loggedInUser.role == 'PATIENT') {
        visit = await req.db.collection('records').findOne({
            'patientInfo.email': loggedInUser.email,
            'visits._id': ObjectID(req.params.visit_id)
        }, { projection: { _id: 0, 'visits.$': 1 } })
    }
    else {
        visit = null;
    }

    if (!visit) {
        res.json({ message: "No visit found!" })
    }
    else {
        res.json(visit)
    }
}