const mongoose = require('mongoose');
const app = require('./app');
require ('dotenv').config();


mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () =>{
    console.log('Yep! Abdul Basir! db connected');
})

const port = process.env.PORT || 3000;

app.listen(port, (req, res) =>{
    console.log(`app running on ${port}`);
})
