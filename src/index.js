import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/Home/';
import registerServiceWorker from './registerServiceWorker';
import './assets/styles/app.sass';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
