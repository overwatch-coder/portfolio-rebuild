const express = require('express');
const router = express.Router()
const nodemailer = require('nodemailer');
const { MAIL_HOST, MAIL_PORT, MAIL_AUTH_USER, MAIL_AUTH_PASS } = process.env;

router.post('/', (req, res) => {
    const {fullName, email, subject, message} = req.body;

    const transporter = nodemailer.createTransport({
        host: MAIL_HOST,
        port: MAIL_PORT,
        auth: {
            user: MAIL_AUTH_USER,
            pass: MAIL_AUTH_PASS
        }
    })

    const mailOptions = {
        from: email,
        to: "devbrainy@gmail.com",
        subject: subject,  
        html: 
            `<p>New message received:<p>
            <p>User Email: ${email}</p>
            <p>Full Name: ${fullName}</p>
            <p>Subject: ${subject}</p>
            <p>Message: ${message}</p>
            `
    }

   const sentMail = transporter.sendMail(mailOptions, (err) => {
        if(err) return console.log(err.message);
    })
    
    res.json({data: "Conntected to backend successfully - " + sentMail})

})

module.exports = router