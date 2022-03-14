module.exports.updateRecord = async (req, res, next) => {
    let record = await req.db.collection('records')
        .updateOne({ email: req.params.p_email, 'doctor.email': req.prams.doc_email }, req.body)
    res.json(record);
}