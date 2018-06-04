import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
