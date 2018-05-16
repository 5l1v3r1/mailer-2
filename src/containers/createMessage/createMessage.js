import React, { Component } from 'react';
import PropTypes from 'prop-types';




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