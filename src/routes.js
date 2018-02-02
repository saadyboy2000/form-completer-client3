import React from 'react';
import {Route, IndexRoute } from 'react-router';

import ContactForm from './components/contact-form';
import Greetings from './components/Greetings';
import SignupForm from './components/SignupForm';
import App from './components/app';
import SigninForm from './components/SigninForm';


export default (
	<Route path = "/" component = {App}>
		
		<Route path = "signup" component = {SignupForm} />
		<Route path = "formcompleter" component = {ContactForm} />
		<Route path = "signin" component = {SigninForm} />
	</Route>

	)