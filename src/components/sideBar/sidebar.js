import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SideBar extends Component {
    render() {
        return (
            <aside>
                <ul>
                    <li onClick={this.props.updateCurrentView.bind(this, 'MAILER')}>Mail</li>
                    <li onClick={this.props.updateCurrentView.bind(this, 'SETTINGS')}>Settings</li>
                </ul>
            </aside>
        );
    }
}

SideBar.propTypes = {
    updateCurrentView: PropTypes.func.isRequired
};

export default SideBar;