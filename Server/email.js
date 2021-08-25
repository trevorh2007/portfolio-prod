const nodemailer = require('nodemailer')

async function main(name, email, body) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.CONTACT_EMAIL,
            pass: process.env.CONTACT_PASS
        }
    })

    var mailOptions = {
        from: 'runelite.throwaway2@gmail.com',
        to: 'trevorhoward2@gmail.com',
        subject: 'Contact from portfolio',
        text: `
            Name: ${name}\n
            Email: ${email}\n
            Body: ${body}
        `
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, info) => {
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