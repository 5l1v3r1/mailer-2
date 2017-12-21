
// import nodemailer from 'nodemailer';
const nodemailer = require('nodemailer');
const transporterConfig = require('./transporter.config.json');


// Inputs
let inputFirstName = "david";
let inputLastName = "cHung";
// let inputCompany = "pelotea";
let inputAddresses = [
    `test.com`,
    `othertest.io`
];

let subject = "Front End Web Developer";
let message = `Hi Prasanjit,

I really like the mission of Pelotea. I'm a web developer based in San Francisco, and would love to help out.
I know you're probably on holiday right now, but if you have any time to meet or talk I'd really apprieciate it.

Thank you,
David Chung`;

// Phone: (908) 930 - 8054
// Linkedin: https://www.linkedin.com/in/davidc4747/
// GitHub: https://github.com/davidc4747
// Pluralsight: https://app.pluralsight.com/profile/davidc4747
// Twitter: https://twitter.com/davidc4747
// `;





// Sanitize input
let firstName = inputFirstName.trim().toLowerCase();
let lastName = inputLastName.trim().toLowerCase();
// let company = inputCompany.trim().toLowerCase();

// Get initials
let firstInitial = firstName.charAt(0);
let lastInitial = lastName.charAt(0);

// Generate possible emails
let emailAddresses = [];
inputAddresses.forEach(addr => {
    addr = addr.trim().toLowerCase();
    emailAddresses = emailAddresses.concat([
        `${firstName}@${addr}`,
        `${firstName}${lastInitial}@${addr}`,
        `${firstInitial}${lastName}@${addr}`,
        `${firstName}${lastName}@${addr}`,
        `${firstName}.${lastName}@${addr}`,
        `${firstName}_${lastName}@${addr}`
    ]);
})




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
        attachments:[{ path: '../../Docs/DavidGChung.pdf'}]
    };

    // Send emails
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Message failed:', email, error);
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