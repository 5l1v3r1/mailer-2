import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tasks from '../tasks/tasks';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { currentTask } = this.props;
        let currentTaskIndex = Tasks.getTaskIndex(currentTask);
        console.log(currentTask);

        return (
            <header>
                <div onClick={this.props.toggleSidebar}>=</div>
                <ul>
                    {currentTaskIndex >= 0 && (
                        <li>> Generate Emails</li>
                    )}

                    {currentTaskIndex >= 1 && (
                        <li>> Edit Emails</li>
                    )}

                    {currentTaskIndex >= 2 && (
                        <li>> Create Message</li>
                    )}

                    {currentTaskIndex >= 3 && (
                        <li>> Done</li>
                    )}
                </ul>
            </header>
        );
    }
}

Header.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
    currentTask: PropTypes.string
}

export default Header;