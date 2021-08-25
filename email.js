const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport')

async function main(name, email, body) {
    const auth = {
        auth: {
            api_key: process.env.MAILGUN_API_KEY,
            domain: process.env.MAILGUN_DOMAIN
        }
    }

    const nodemailerMailgun = nodemailer.createTransport(mg(auth))

    var mailOptions = {
        from: 'noreply@trevorhoward.me',
        to: 'trevorhoward2@gmail.com',
        subject: 'Contact from portfolio',
        text: `
            Name: ${name}\n
            Email: ${email}\n
            Body: ${body}
        `
    }

    return new Promise((resolve, reject) => {
        nodemailerMailgun.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err)
                reject('Fail')
            } else {
                console.log('Email sent: ' + info.response)
                resolve('OK')
            }
        })
    })

}

module.exports = { main }