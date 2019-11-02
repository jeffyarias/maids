const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
mongoose.connect
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/form', (req, res) => {
   
   nodemailer.createTestAccount((err, account)=>{
    const htmlEmail = `<h3>Contact Detail</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Address: ${req.body.address}</li>
    <li>Bedrooms: ${req.body.bedrooms}</li>
    <li>Bathrooms: ${req.body.bathrooms}</li>
    <li>Price: ${req.body.price}</li>
    </ul>
    
    `
    let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
     user: 'jeffreyarias21@gmail.com',
     pass: '182177!Scorpion'
     

    }


    });

    let mailOptions = {
     from: 'Boston Maids',
     to: req.body.email,
     subject: 'Cleaning',
     text: 'Cleaning Booking',
     html: htmlEmail



    }
    
transporter.sendMail(mailOptions, (err, info)=>{

if(err) {

console.log(err);

}else {
 console.log("Email send: " + info.response);


}

});


    });
});


//app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 3001;


app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));