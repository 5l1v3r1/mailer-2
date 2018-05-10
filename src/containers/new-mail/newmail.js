'use strict';
const guessEmail = require('../../services/mailer.js');



let button = document.querySelector('.btn--submit');
button.addEventListener('click', e => {

    // Get user input
    let isTesting = true;
    let inputFirstName = document.getElementsByName("firstname")[0].value;
    let inputLastName = document.getElementsByName("lastname")[0].value;
    let inputDomains = [document.getElementsByName("domain")[0].value];
    let subject = document.getElementsByName("subject")[0].value;
    let message = document.getElementsByName("message")[0].value;



    // Send Emails
    guessEmail({
        inputFirstName,
        inputLastName,
        inputDomains,
        subject,
        message,
        isTesting,
        attachments:[{ path: 'C:/Users/Deku/Documents/DavidGChung.pdf'}] // TODO:
    });

    document.addEventListener('creating-emails', (event, args) => {
        // Display creating-emails message
        console.log('Creating emails...');
        let outputElem = document.getElementsByClassName('output')[0];
        outputElem.innerHTML = `<li>Creating emails...</li>`;
    });

    // contact the service. send the mail
    document.addEventListener('mailer-message', (event, args) => {
        let outputElem = document.getElementsByClassName('output')[0];
        outputElem.innerHTML = outputElem.innerHTML + `<li>${event.detail}</li>`;
    });
});
