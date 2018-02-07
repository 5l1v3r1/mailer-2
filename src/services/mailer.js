const nodemailer = require('nodemailer');
const transporterConfig = require('../../transporter.config.json');





/**
 * Guesses a person's email given a name and company.
 *  @param {string} inputFirstName - First name of the person you'd like to email
 *  @param {string} inputLastName - Last name of the person you'd like to email
 *  @param {array<string>} inputDomains - List of possible domain names
 *  @param {string} subject - Subject line of the email
 *  @param {string} message - The message of the email
 *  @param {bool} isTesting - Decides if the user should send a copy of the email to himself
 *  @param {array<object>} attachments - Anything you might want to attach to the message
 */
module.exports = function({ inputFirstName, inputLastName, inputDomains, subject, message, isTesting, attachments }) {

    // Sanitize input
    let firstName = inputFirstName.trim().toLowerCase();
    let lastName = inputLastName.trim().toLowerCase();

    // Get initials
    let firstInitial = firstName.charAt(0);
    let lastInitial = lastName.charAt(0);

    // Generate possible emails
    let emailAddresses = [];
    inputDomains.forEach(addr => {
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
    document.dispatchEvent(new CustomEvent("creating-emails"));
    let transporter = nodemailer.createTransport(transporterConfig);
    emailAddresses.forEach(email => {

        // Create mail object
        let mailOptions = {
            to: email,
            subject: subject,
            text: message,
            attachments
        };

        // Send emails
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(`Message failed: ${email} ${error}`);
                // Trigger message event
                document.dispatchEvent(new CustomEvent("mailer-message", {
                    detail: `Message failed: ${email}`
                }));
            }
            else {
                console.log(`Message sent: ${email} ${info.messageId}`);
                // Trigger message event
                document.dispatchEvent(new CustomEvent("mailer-message", {
                    detail: `Message sent: ${email}`
                }));
            }
        });

    });

}