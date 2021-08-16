const nodemailer = require('nodemailer')

async function main() {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'trevorhoward2@gmail.com',
            pass: 'Whit3H4t5'
        }
    })

    var mailOptions = {
        from: 'trevorhoward2@gmail.com',
        to: 'trevorhoward2@gmail.com',
        subject: 'Contact from portfolio',
        text: 'Just a test to see if the email sends'
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log('Email sent: ' + info.response)
        }
    })
}

module.exports = { main }