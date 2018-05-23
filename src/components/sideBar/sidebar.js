import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './sidebar.css';


class SideBar extends Component {
    render() {
        return (
            <nav className="sidebar list-unstyled">
                <a href="#" className="sidebar__item" onClick={this.props.updateCurrentView.bind(this, 'MAILER')}>M</a>
                <a href="#" className="sidebar__item" onClick={this.props.updateCurrentView.bind(this, 'SETTINGS')}>S</a>
            </nav>
        );
    }
}

SideBar.propTypes = {
    updateCurrentView: PropTypes.func.isRequired
};

export default SideBar;