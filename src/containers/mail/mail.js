import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './mail.css';
import mailer from '../../services/mailer.js';



class Mail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isTesting: false,
            firstname: '',
            lastname: '',
            domain: '',
            subject: '',
            message: '',

            output: []
        };
    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSendMail = (event) => {
        // Clear output box
        this.setState({ output: [] });

        // Send Emails
        let mailPromises = mailer({
            inputFirstName: this.state.firstname,
            inputLastName: this.state.lastname,
            inputDomains: [this.state.domain],
            subject: this.state.subject,
            message: this.state.message,
            isTesting: this.state.isTesting,
            attachments: [{ path: 'C:/Users/Deku/Documents/DavidGChung.pdf' }] // TODO:
        });

        // Print the status if each email
        mailPromises.forEach(prom => {
            prom
                .then((res) => {
                    // Email Successfull
                    this.setState({ output: [...this.state.output, `Email sent to ${res.email}`] });
                })
                .catch((err) => {
                    // Email failed
                    this.setState({ output: [...this.state.output, `Email failed: ${err.email}`] });
                });
        });
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
                    <textarea name="message" className="txt" value={this.state.message} onChange={this.handleChange}></textarea>
                </div>

                <div className="form-group" style={{ width: "100%" }}>
                    <button className="btn btn--submit" onClick={this.handleSendMail}>Send</button>
                </div>


                {this.state.output.length > 0 && (
                    <ul className="output">
                        {this.state.output.map(op => <li className="output-item">{op}</li>)}
                    </ul>
                )}

            </main>
        );
    }
}



export default Mail;