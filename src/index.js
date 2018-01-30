import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import store from './store'; 
import ContactForm from './components/contact-form';
import registerServiceWorker from './registerServiceWorker';
//alternate router
import { Router, browserHistory } from 'react-router';
import routes from './routes';

//Thinkful version below
/*
ReactDOM.render(
    <Provider store={store}>
        <ContactForm />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

*/

//alternate version
ReactDOM.render(
<Provider store={store}>
 	<Router history = {browserHistory} routes = {routes} />
 </Provider>,
    document.getElementById('root')
);
registerServiceWorker();