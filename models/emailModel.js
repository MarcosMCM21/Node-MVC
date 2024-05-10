class Email {
    constructor() {}

    sendEmail(para, assunto, mensagem, fmtHTML) {
        const sgMail = require('@sendgrid/mail')
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        
        const msg = {
            to: para, // Change to your recipient
            from: 'contato@marcoscorreademelo.com.br', // Change to your verified sender
            subject: assunto,
            text: mensagem,
            html: fmtHTML,
        }

        sgMail
            .send(msg)
            .then(() => {
                console.log('Email enviado!')
            })
            .catch((error) => {
                console.error(error)
            })
    }
}

module.exports = Email