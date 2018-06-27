import React, { Component } from "react";
import PropTypes from "prop-types";

import "./header.css";
import Tasks from "../tasks/tasks";

class Header extends Component {
    render() {
        let { currentTask } = this.props;
        let currentTaskIndex = Tasks.getTaskIndex(currentTask);

        return (
            <header>
                <ul className="task-list list-unstyled">
                    {currentTaskIndex >= 0 && (
                        <li
                            className={`task-item ${
                                currentTaskIndex === 0
                                    ? "task-item--active"
                                    : ""
                            }`}
                        >
                            Generate Emails
                        </li>
                    )}

                    {currentTaskIndex >= 1 && (
                        <li
                            className={`task-item ${
                                currentTaskIndex === 1
                                    ? "task-item--active"
                                    : ""
                            }`}
                        >
                            Edit Emails
                        </li>
                    )}

                    {currentTaskIndex >= 2 && (
                        <li
                            className={`task-item ${
                                currentTaskIndex === 2
                                    ? "task-item--active"
                                    : ""
                            }`}
                        >
                            Create Message
                        </li>
                    )}

                    {currentTaskIndex >= 3 && (
                        <li
                            className={`task-item ${
                                currentTaskIndex === 3
                                    ? "task-item--active"
                                    : ""
                            }`}
                        >
                            Done
                        </li>
                    )}
                </ul>
            </header>
        );
    }
}

Header.propTypes = {
    currentTask: PropTypes.string,
};

export default Header;
