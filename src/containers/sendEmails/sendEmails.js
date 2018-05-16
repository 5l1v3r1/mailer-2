import React, { Component } from 'react';
import PropTypes from 'prop-types';

import sendEmails from '../../services/mailer.js';



class SendEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            output: []
        };
    }

    componentDidMount() {
        // Send Emails
        let mailPromises = sendEmails({
            emailAddresses: this.props.emails,
            subject: this.props.emailContent.subject,
            message: this.props.emailContent.message,
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

        // Tell parent that the form has been completed correctly
        Promise.all(mailPromises)
            .then(res => this.props.taskDone())
            .catch(err => console.log("Error sending emails: ", err));
    }


    render() {
        return (
            <div>
                <ul>
                    {this.state.output.map(op => <li>{op}</li>)}
                </ul>
            </div>
        );
    }
}

SendEmail.propTypes = {
    emails: PropTypes.arrayOf(PropTypes.string).isRequired,
    emailContent: PropTypes.object.isRequired,
    taskDone: PropTypes.func.isRequired
}

export default SendEmail;