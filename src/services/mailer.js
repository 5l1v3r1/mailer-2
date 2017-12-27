const nodemailer = require('nodemailer');
const transporterConfig = require('./transporter.config.json');



// Inputs
const isTesting = false;
let inputFirstName = "---";
let inputLastName = "---";
let inputAddresses = [
    `----.com`
];

let subject = "---";
let message = `Hey ---,

Thank you,
David Chung

Phone: (908) 930 - 8054
Linkedin: https://www.linkedin.com/in/davidc4747
Pluralsight: https://app.pluralsight.com/profile/davidc4747
`;

// Phone: (908) 930 - 8054
// Portfolio: http://davidchung.net
// Linkedin: https://www.linkedin.com/in/davidc4747
// GitHub: https://github.com/davidc4747
// Pluralsight: https://app.pluralsight.com/profile/davidc4747
// Twitter: https://twitter.com/davidc4747





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

if(isTesting) {
    emailAddresses.push(transporterConfig.auth.user);
}





// Setup nodemailer
console.log("Creating emails...");
let transporter = nodemailer.createTransport(transporterConfig);
emailAddresses.forEach(email => {

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