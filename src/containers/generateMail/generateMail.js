import React, { Component } from 'react';
import PropTypes from 'prop-types';

import transporterConfig from '../../../transporter.config.json';



class GenerateMail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isTesting: false,
            firstname: '',
            lastname: '',
            domain: ''
        };
    }

    handleGenerateEmails = () => {

        // Sanitize input
        let firstName = this.state.firstname.trim().toLowerCase();
        let lastName = this.state.lastname.trim().toLowerCase();

        // Get initials
        let firstInitial = firstName.charAt(0);
        let lastInitial = lastName.charAt(0);

        // Generate possible emails
        let newEmails = [];
        [this.state.domain].forEach(addr => {
            addr = addr.trim().toLowerCase();
            newEmails = newEmails.concat([
                `${firstName}@${addr}`,
                `${firstName}${lastInitial}@${addr}`,
                `${firstInitial}${lastName}@${addr}`,
                `${firstName}${lastName}@${addr}`,
                `${firstName}.${lastName}@${addr}`,
                `${firstName}_${lastName}@${addr}`
            ]);
        })

        if (this.state.isTesting) {
            // Send a copy of the email to the user's email address
            newEmails.push(transporterConfig.auth.user);
        }


        // Update parent state
        this.props.updateEmails(newEmails);

        // Tell parent the the form has been completed correctly
        this.props.taskDone();
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }



    render() {
        return (
            <section>
                <div className="form-group" style={{ width: "50%" }}>
                    <label className="lbl" htmlFor="firstname">First Name</label>
                    <input name="firstname" className="txt" type="text" value={this.state.firstname} onChange={this.handleChange} />
                </div>


                <div className="form-group" style={{ width: "50%" }}>
                    <label className="lbl" htmlFor="lastname">Last Name</label>
                    <input name="lastname" className="txt" type="text" value={this.state.lastname} onChange={this.handleChange} />
                </div>


                <div className="form-group" style={{ width: "100%" }}>
                    <label className="lbl" htmlFor="domain">Domain</label>
                    <input name="domain" className="txt" type="text" value={this.state.domain} onChange={this.handleChange} />
                </div>


                <div className="form-group" style={{ width: "100%" }}>
                    <button className="btn btn--submit" onClick={this.handleGenerateEmails}>Create Emails</button>
                </div>


            </section>
        );
    }
}

GenerateMail.propTypes = {
    updateEmails: PropTypes.func.isRequired,
    taskDone: PropTypes.func.isRequired
};


export default GenerateMail;