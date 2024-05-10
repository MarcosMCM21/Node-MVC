exports.view = (req, res) => {
    res.render('form')
}

exports.post = (req,res) => {
    console.log(req.query)
    console.log(req)
    console.log(res)
    paramEmail = req.body['email']
    res.render('email', { email: paramEmail })
}