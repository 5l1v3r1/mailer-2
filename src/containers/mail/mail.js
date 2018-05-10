import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './mail.css';
// import mailer from '../../services/mailer.js';



class Mail extends Component {
    render() {
        return (
            <main className="content">
                <div className="form-group" style={{width: "50%"}}>
                    <label className="lbl" for="firstname">First Name</label>
                    <input name="firstname" className="txt" type="text" />
                </div>


                <div className="form-group" style={{width: "50%"}}>
                    <label className="lbl" for="lastname">Last Name</label>
                    <input name="lastname" className="txt" type="text" />
                </div>


                <div className="form-group" style={{width: "100%"}}>
                    <label className="lbl" for="domain">Domain</label>
                    <input name="domain" className="txt" type="text" />
                </div>


                <div className="form-group" style={{width: "100%"}}>
                    <label className="lbl" for="subject">Subject</label>
                    <input name="subject" className="txt" type="text" />
                </div>


                <div className="form-group" style={{width: "100%"}}>
                    <label className="lbl" for="message">Message</label>
                    <textarea name="message" className="txt" name="" id="" cols="30" rows="7"></textarea>
                </div>

                <div className="form-group" style={{width: "100%"}}>
                    <button className="btn btn--submit">Send!</button>
                </div>

                <ul className="output"></ul>

            </main>
        );
    }
}



export default Mail;