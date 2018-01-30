import React from 'react';
import {Route, IndexRoute } from 'react-router';

import ContactForm from './components/contact-form';
import Greetings from './components/Greetings';
import SignupPage from './components/SignupPage';
import App from './components/app';


export default (
	<Route path = "/" component = {App}>
		<IndexRoute component = {ContactForm} />
		<Route path = "signup" component = {SignupPage} />
	</Route>

	)