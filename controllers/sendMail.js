const nodemailer = require("nodemailer");
require('dotenv').config();

exports.sendMail = async (req, res) =>{
    const {email, subject, message} = req.body;
    const emails = email.toString();
    try {
        
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp-mail.outlook.com",
            port: 587,
            secureConnection: false, // true for 465, false for other ports
            auth: {
                user: process.env.emailUser, // generated ethereal user
                pass: process.env.emailPassword, // generated ethereal password
            },
            tls: {
                ciphers:'SSLv3'
            }
        });

        let info = await transporter.sendMail({
            from: process.env.emailUser, // sender address
            to: emails, // list of receivers
            subject: subject, // Subject line
            text: message, // plain text body
        });

        
        if(info.messageId){
            res.status(200).send({
                message: 'Message Send successfull'
            })
        }
         } catch (error) {
        res.status(404).send({
            error: error,
            message: 'there is a problem with your request'
        })
    }
}