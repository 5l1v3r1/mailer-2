const nodemailer = require('nodemailer');
const transporterConfig = require('../../transporter.config.json');





/**
 * Sends emails to the specified addresses
 *  @param {array<string>} emailAddresses - List of email addresses to send to
 *  @param {string} subject - Subject line of the email
 *  @param {string} message - The message of the email
 *  @param {array<object>} attachments - Anything you might want to attach to the message
 */
module.exports = function ({ emailAddresses, subject, message, attachments }) {
    // Setup nodemailer
    let promises = [];
    let transporter = nodemailer.createTransport(transporterConfig);
    emailAddresses.forEach(email => {

        // Create mail object
        let mailOptions = {
            to: email,
            subject: subject,
            text: message,
            attachments
        };


        let prom = new Promise(function (resolve, reject) {
            // Send emails
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(`Email failed: ${email} ${error}`);
                    reject({ email, info, error });
                }
                else {
                    console.log(`Email sent: ${email} ${info.messageId}`);
                    resolve({ email, info });
                }
            });

        });


        promises.push(prom);
    });

    return promises;
}