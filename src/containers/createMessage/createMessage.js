import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import sendEmails from '../../services/mailer.js';



class CreateMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            message: ''
        };
    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSendMail = (event) => {
        let { subject, message } = this.state;
        this.props.updateEmailContent({ subject, message });

        // Tell parent that the form has been completed correctly
        this.props.taskDone();
    }

    // handleSendMail = (event) => {
    //     // Send Emails
    //     let mailPromises = sendEmails({
    //         emailAddresses: this.props.emails,
    //         subject: this.state.subject,
    //         message: this.state.message,
    //         attachments: [{ path: 'C:/Users/Deku/Documents/DavidGChung.pdf' }] // TODO:
    //     });

    //     // Print the status if each email
    //     // mailPromises.forEach(prom => {
    //     //     prom
    //     //         .then((res) => {
    //     //             // Email Successfull
    //     //             this.setState({ output: [...this.state.output, `Email sent to ${res.email}`] });
    //     //         })
    //     //         .catch((err) => {
    //     //             // Email failed
    //     //             this.setState({ output: [...this.state.output, `Email failed: ${err.email}`] });
    //     //         });
    //     // });

    //     // Tell parent that the form has been completed correctly
    //     Promise.all(mailPromises)
    //         .then(res => this.props.taskDone())
    //         .catch(err => console.log("Error sending emails: ", err));
    // }

    render() {
        return (
            <div>
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

            </div>
        );
    }
}

CreateMessage.propTypes = {
    updateEmailContent: PropTypes.func.isRequired,
    taskDone: PropTypes.func.isRequired
}

export default CreateMessage;