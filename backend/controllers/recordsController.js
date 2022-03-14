module.exports.addRecord = async (req, res, next) => {
    let result = await req.db.collection('records').insertOne(req.body)
    res.json(result.insertId);
}

module.exports.updateRecord = async (req, res, next) => {
    let record = await req.db.collection('records')
        .updateOne({ email: req.params.p_email, 'doctor.email': req.prams.doc_email }, req.body)
    res.json(record);
}

module.exports.addVisit = async (req, res, next) => {
    await req.db.collection('records').updateOne({email: req.params.p_email}, {$push: {visits: req.body}})
    res.json(req.body._id);
}

module.exports.getRecordByPatientEmail = async (req, res, next) => {
    let user = await req.db.collection('users').findOne({email : req.params.user_email})

    let record;

    if(user.role == "DOCTOR"){
        record = req.db.collection('records').findOne({email : p_email, 'doctoer.email' : req.params.user_email})
    }
    else if(req.params.user_email == req.params.p_email){
        record = req.db.collection('records').findOne({email : req.params.user_email})
    }
    else{
        record = null;
    }

    if(!record) {
        res.json({ message : "No record found!" })
    }
    else{
        res.json(record)
    }
}

module.exports.getPatientRecordsForDoctor = async (req, res, next) => {
    let records = await req.db.collection('records').find({'doctor.email' : req.params.doc_email}).toArray();
    if(records){
        res.json(records)
    }
    else{
        res.json({message : 'No records found!'})
    }
}

module.exports.getPatientVisitById = async (req, res, next) => {
    let user = await req.db.collection('users').findOne({email : req.params.user_email})

    let visit;

    if(user.role == "DOCTOR"){
        visit = req.db.collection('records').findOne({email : req.params.p_email, visits : {$elemMatch: {_id : req.params.visit_id}}})
    }
    else if(req.params.user_email == req.params.p_email){
        visit = req.db.collection('records').findOne({email : req.params.user_email, visits : {$elemMatch: {_id : req.params.visit_id}}})
    }
    else{
        visit = null;
    }

    if(!visit) {
        res.json({ message : "No visit found!" })
    }
    else{
        res.json(visit)
    }
}