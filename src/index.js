import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/wrappers/App';

// Add bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Add our style
import './assets/style/index.css';

// the render() method returns HTML
ReactDOM.render( // The function takes two arguments, HTML code and an HTML element
    <App/>,
    document.getElementById('root') // This from the javascript
);
