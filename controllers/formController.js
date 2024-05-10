exports.view = (req, res) => {
    res.render('form')
}

exports.post = (req,res) => {
    paramEmail = req.body['email']
    res.render('email', { email: paramEmail })
    sendEmail(paramEmail)
}

function sendEmail(email) {
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
        to: email, // Change to your recipient
        from: 'contato@marcoscorreademelo.com.br', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}