import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.css';
import Header from './components/header/header.js';
import GenerateMail from './containers/generateMail/generateMail';
import EditEmail from './containers/editEmail/editEmail';
import CreateMessage from './containers/createMessage/createMessage';
import SendEmail from './containers/sendEmails/sendEmails';



let Tasks = [
    'GENERATE_EMAILS',
    'EDIT_EMIALS',
    'CREATE_MESSAGE',
    'DONE'
];



class App extends Component {
    constructor(props) {
        super(props);

        // Test state 1
        this.state = {
            currentTask: Tasks[0],
            emails: [],
            emailContent: {
                subject: '',
                message: ''
            }
        };
    }

    taskDone = () => {
        // Move to the next in the list
        let nextTaskIndex = (Tasks.indexOf(this.state.currentTask) + 1) % Tasks.length;
        this.setState({ currentTask: Tasks[nextTaskIndex] });
    }

    updateEmails = (emails) => {
        this.setState({ emails });
    }

    updateEmailContent = (emailContent) => {
        this.setState({ emailContent });
    }



    render() {
        let { currentTask } = this.state;

        return (
            <section>
                <Header />

                {/* TODO: sidebar here */}

                {currentTask === 'GENERATE_EMAILS' && (
                    <GenerateMail updateEmails={this.updateEmails} taskDone={this.taskDone} />
                )}

                {currentTask === 'EDIT_EMIALS' && (
                    <EditEmail emails={this.state.emails} updateEmails={this.updateEmails} taskDone={this.taskDone} />
                )}

                {currentTask === 'CREATE_MESSAGE' && (
                    <CreateMessage emails={this.state.emails} updateEmailContent={this.updateEmailContent} taskDone={this.taskDone} />
                )}

                {currentTask === 'DONE' && (
                    <SendEmail emails={this.state.emails} emailContent={this.state.emailContent} taskDone={this.taskDone} />
                )}
            </section>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.app'));