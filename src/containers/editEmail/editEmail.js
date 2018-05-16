import React, { Component } from 'react';
import PropTypes from 'prop-types';



class EditEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emails: props.emails
        };
    }

    handleEmailAdd = (event) => {
        // Add a new empty email to the list
        this.setState((prevState) => ({ emails: [...prevState.emails, ''] }));
    }

    handleEmaileDelete = (emailIndex, event) => {
        // Filter out the email at 'emailIndex'
        this.setState((prevState) => ({
            emails: prevState.emails.filter((email, index) => index !== emailIndex)
        }));
    }

    handleInputUpdate = (emailIndex, event) => {
        let { emails } = this.state;
        emails[emailIndex] = event.target.value;
        this.setState({ emails });
    }



    render() {
        return (
            <div>
                <ul>
                    {this.state.emails.map((email, emailIndex) => (
                        <li key={emailIndex}>
                            <input type="text" value={email} onChange={this.handleInputUpdate.bind(this, emailIndex)} />
                            <button onClick={this.handleEmaileDelete.bind(this, emailIndex)}>Delete</button>
                        </li>
                    ))}

                    <li>
                        <button onClick={this.handleEmailAdd}>Add Email</button>
                    </li>


                </ul>


                <div className="form-group" style={{ width: "100%" }}>
                    <button className="btn btn--submit" onClick={this.props.taskDone}>Confirm</button>
                </div>

            </div>
        );
    }
}

EditEmail.propTypes = {
    emails: PropTypes.arrayOf(PropTypes.string).isRequired,
    taskDone: PropTypes.func.isRequired
};

export default EditEmail;