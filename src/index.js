import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.css';
import Header from './components/header/header.js';
import Tasks from './components/tasks/tasks';

import GenerateMail from './containers/generateMail/generateMail';
import EditEmail from './containers/editEmail/editEmail';
import CreateMessage from './containers/createMessage/createMessage';
import SendEmail from './containers/sendEmails/sendEmails';




class App extends Component {
    constructor(props) {
        super(props);

        // Test state 1
        this.state = {
            displaySidebar: false,
            currentTask: Tasks.GENERATE_EMAILS,
            emails: [],
            emailContent: {
                subject: '',
                message: ''
            }
        };
    }

    taskDone = () => {
        // Move to the next in the list
        this.setState({ currentTask: Tasks.getNextTask(this.state.currentTask) });
    }

    updateEmails = (emails) => {
        this.setState({ emails });
    }

    updateEmailContent = (emailContent) => {
        this.setState({ emailContent });
    }

    toggleSidebar = () => {
        this.setState((prevState) => ({ displaySidebar: !prevState.displaySidebar }));
    }



    render() {
        let { currentTask, displaySidebar } = this.state;

        return (
            <section>
                <Header currentTask={currentTask} toggleSidebar={this.toggleSidebar} />

                {displaySidebar && (
                    <aside>I'm here!</aside>
                )}


                {currentTask === Tasks.GENERATE_EMAILS && (
                    <GenerateMail updateEmails={this.updateEmails} taskDone={this.taskDone} />
                )}

                {currentTask === Tasks.EDIT_EMIALS && (
                    <EditEmail emails={this.state.emails} updateEmails={this.updateEmails} taskDone={this.taskDone} />
                )}

                {currentTask === Tasks.CREATE_MESSAGE && (
                    <CreateMessage emails={this.state.emails} updateEmailContent={this.updateEmailContent} taskDone={this.taskDone} />
                )}

                {currentTask === Tasks.DONE && (
                    <SendEmail emails={this.state.emails} emailContent={this.state.emailContent} taskDone={this.taskDone} />
                )}
            </section>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.app'));