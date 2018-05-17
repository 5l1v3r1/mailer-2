import React, { Component } from 'react';
import PropTypes from 'prop-types';


class UserSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            settings: JSON.stringify(props.userSettings)
        };
    }

    handleChange = (event) => {
        this.setState({ settings: event.target.value });
    }

    render() {
        return (
            <div>
                {/* Should allow users to endit 'transporter.config.json' and save it to the localStorage */}
                <textarea onChange={this.handleChange} value={this.state.settings}></textarea>
                <button onClick={this.props.updateUserSettings.bind(this, this.state.settings)}>Save</button>
            </div>
        );
    }
}

UserSettings.propType = {
    userSettings: PropTypes.object.isRequired,
    updateUserSettings: PropTypes.func.isRequired
};

export default UserSettings;