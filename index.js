
// import nodemailer from 'nodemailer';
const nodemailer = require('nodemailer');
const transporterConfig = require('./transporter.config.json');


// Inputs
let inputFirstName = "davId";
let inputLastName = "cHung";
let inputCompany = "pdHi";

let subject = "Frontend Developer";
let message = `Hey -----,

nice!!

Thank you,
David Chung`;

// Phone: (908) 930 - 8054
// Linkedin: https://www.linkedin.com/in/davidc4747/
// Twitter: https://twitter.com/davidc4747`;





// Sanitize input
let firstName = inputFirstName.trim().toLowerCase();
let lastName = inputLastName.trim().toLowerCase();
let company = inputCompany.trim().toLowerCase();

// Get initials
let firstInitial = firstName.charAt(0);
let lastInitial = lastName.charAt(0);

// Generate possible emails
let emailAddresses = [
    `${firstName}${lastInitial}@${company}.com`,
    `${firstInitial}${lastName}@${company}.com`,
    `${firstName}${lastName}@${company}.com`,
    `${firstName}.${lastName}@${company}.com`,
    `${firstName}_${lastName}@${company}.com`
];






// Setup nodemailer
console.log("Creating emails...");
let transporter = nodemailer.createTransport(transporterConfig);
emailAddresses.forEach(email => {

    // Send a copy of the email to me.
    // testOutput();

    // Create mail object
    let mailOptions = {
        to: email,
        subject: subject,
        text: message,
        attachments:[{ path: '../../Docs/David-Chung.pdf'}]
    };

    // Send emails
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Message error:', email, error);
        }
        console.log('Message sent: ', email, info.messageId);
    });

});





function testOutput() {

    // Send a single test email.
    let mailOptions = {
        to: 'davidc4747@yahoo.com',
        subject: subject,
        text: message,
        attachments:[
            {
                path: '../../Docs/David-Chung.pdf'
            }
        ]
    };
    console.log("Sending message to ", email);
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Message error:', email, error);
        }
        console.log('Message sent: ', email, info.messageId);
    });

}