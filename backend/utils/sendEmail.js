const nodemailer = require("nodemailer")

const sendEmail = (subject, message, send_to, send_from, reply_to) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: "587",
        auth: {
            user: process.env_EMAIL_USER,
            pass: process.env_EMAIL_PASS
        },
        tls: {
            rejectUnauthorized: false,
        }
    })

    const options = {
        from: send_from,
        to: send_to,
        replyTo: reply_to,
        subject: subject,
        html: message
    }

    // Send Email
    transporter.sendMail(options, function(err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info)
        }
    }) 
}

module.exports = sendEmail