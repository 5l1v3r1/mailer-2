import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.css';
import TempHome from './containers/test-home/testHome';

const App = () => <p> Hello React! <TempHome /></p>; 

ReactDOM.render(<App />, document.querySelector('.app'));