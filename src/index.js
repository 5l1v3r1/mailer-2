import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.css';
import Header from './components/header/header.js';
import GenerateMail from './containers/generateMail/generateMail';
import EditEmail from './containers/editEmail/editEmail';
import CreateMessage from './containers/createMessage/createMessage';
import { log } from 'util';



let Tasks = [
    'GENERATE_EMAILS',
    'EDIT_EMIALS',
    'CREATE_MESSAGE',
    'DONE'
];





class App extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     currentTask: Tasks[0], //default to first task
        //     emails: [],
        //     subject: '',
        //     message: ''
        // };


        // Test state 1
        this.state = {
            currentTask: Tasks[2],
            emails: ["qqqq@rrrrr.com", "qqqqw@rrrrr.com", "qwwww@rrrrr.com", "qqqqwwww@rrrrr.com", "qqqq.wwww@rrrrr.com", "qqqq_wwww@rrrrr.com"],
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
                    // <CreateMessage emails={this.state.emails} taskDone={this.taskDone} />
                    <span>DONE!!!{console.log(this.state)}</span>
                )}
            </section>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.app'));