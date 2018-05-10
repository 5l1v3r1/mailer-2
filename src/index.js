import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.css';
import Mail from './containers/mail/mail';

const App = () => (
    <section>
        <Mail />
    </section>
); 

ReactDOM.render(<App />, document.querySelector('.app'));