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