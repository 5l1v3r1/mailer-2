import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.css';
import Mail from './containers/mail/mail';
import GenerateMail from './containers/generateMail/generateMail';
import Header from './components/header/header.js';
import { stat } from 'fs';



let Tasks = [
    'GENERATE_EMAILS',
    'EDIT_EMIALS',
    'CREATE_MESSAGE',
    'DONE'
];


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTask: Tasks[0], //default to first task
            emails: []
        };
    }

    taskDone = () => {
        // Move to the next in the list
        let nextTaskIndex = (Tasks.indexOf(this.state.currentTask) + 1) % Tasks.length;
        this.setState({ currentTask: Tasks[nextTaskIndex] });
    }



    updateEmails = (emails) => {
        this.setState({ emails: emails });
    }

    appendEmails = (emails) => {
        this.setState((prevState) => { emails: [...prevState.emails, ...emails] });
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
            </section>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.app'));