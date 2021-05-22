const express = require ('express');
const cors = require('cors');
const sendEmail = require('./routes/public/sendEmail');
const nodemailer = require("nodemailer");

const { sendMail } = require('./controllers/sendMail');


const app = express();
app.use(cors())

app.get('/', (req, res) =>{
    res.send('hello dear')
})

app.use(express.json())


app.post('/send-mail', sendMail)

module.exports = app;