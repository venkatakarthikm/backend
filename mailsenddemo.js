const nodemailer = require('nodemailer');


const gmailTransporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'mvk836@gmail.com', //gmail id
        pass: 'vjei ecly fydx fqgb'  // app password
    }
});


const mailOptions = {
    from: 'mvk836@gmail.com',
    to: 'virat18mvk@gmail.com',
    subject: 'MSWD PROJECT TEST MAIL',
    html: '<font color=red>Hello Surya</font>'
};


gmailTransporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.error('Error sending email through Gmail:', error.message);
    } else {
        console.log('Email Sent Successfully');
    }
});