const User = require('../models/userModel')
const Email = require('../models/emailModel')

exports.view = (req, res) => {
    res.render('form')
}

exports.post = (req,res) => {
    toEmail = req.body['email']
    res.render('email', { email: toEmail })

    usuario = new User(req.body['firstName'], req.body['lastName'], req.body['email'], req.body['cep'], req.body['rua'], req.body['numero'], req.body['bairro'], req.body['cidade'], req.body['estado'])
    
    email = new Email().sendEmail(toEmail, 'TESTE', 'Teste de envio de email', '<strong>and easy to do anywhere, even with Node.js</strong>')
}