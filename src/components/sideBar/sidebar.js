import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: ''
        };
    }
    render() {
        return (
            <aside>
                <ul>
                    <li>Open</li>
                    <li>Mail</li>
                    <li>Settings</li>
                </ul>
            </aside>
        );
    }
}

SideBar.propTypes = {

}

export default SideBar;