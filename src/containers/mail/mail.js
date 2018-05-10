import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { ipcRenderer } from 'electron';

import './mail.css';
import mailer from '../../services/mailer.js';



class Mail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isTesting: true,
            firstname: '',
            lastname: '',
            domain: '',
            subject: '',
            message: ''
        }
    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSendMail = (event) => {
        // Send Emails
        mailer({
            inputFirstName: this.state.firstname,
            inputLastName: this.state.lastname,
            inputDomains: [this.state.domain],
            subject: this.state.subject,
            message: this.state.message,
            isTesting: this.state.isTesting,
            attachments: [{ path: 'C:/Users/Deku/Documents/DavidGChung.pdf' }] // TODO:
        });

        // document.addEventListener('creating-emails', (event, args) => {
        //     // Display creating-emails message
        //     console.log('Creating emails...');
        //     let outputElem = document.getElementsByClassName('output')[0];
        //     outputElem.innerHTML = `<li>Creating emails...</li>`;
        // });
    
        // // contact the service. send the mail
        // document.addEventListener('mailer-message', (event, args) => {
        //     let outputElem = document.getElementsByClassName('output')[0];
        //     outputElem.innerHTML = outputElem.innerHTML + `<li>${event.detail}</li>`;
        // });
    }

    render() {
        return (
            <main className="content">
                <div className="form-group" style={{ width: "50%" }}>
                    <label className="lbl" for="firstname">First Name</label>
                    <input name="firstname" className="txt" type="text" value={this.state.firstname} onChange={this.handleChange} />
                </div>


                <div className="form-group" style={{ width: "50%" }}>
                    <label className="lbl" for="lastname">Last Name</label>
                    <input name="lastname" className="txt" type="text" value={this.state.lastname} onChange={this.handleChange} />
                </div>


                <div className="form-group" style={{ width: "100%" }}>
                    <label className="lbl" for="domain">Domain</label>
                    <input name="domain" className="txt" type="text" value={this.state.domain} onChange={this.handleChange} />
                </div>


                <div className="form-group" style={{ width: "100%" }}>
                    <label className="lbl" for="subject">Subject</label>
                    <input name="subject" className="txt" type="text" value={this.state.subject} onChange={this.handleChange} />
                </div>


                <div className="form-group" style={{ width: "100%" }}>
                    <label className="lbl" for="message">Message</label>
                    <textarea name="message" className="txt" name="" value={this.state.message} onChange={this.handleChange}></textarea>
                </div>

                <div className="form-group" style={{ width: "100%" }}>
                    <button className="btn btn--submit" onClick={this.handleSendMail}>Send!</button>
                </div>

                <ul className="output"></ul>

            </main>
        );
    }
}



export default Mail;