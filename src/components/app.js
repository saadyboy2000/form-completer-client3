import React from 'react';
import NavigationBar from './NavigationBar';
import { Route } from 'react-router';

export class App extends React.Component {
	render() {
		return (
			<div className = "contaner">
				<NavigationBar />
				{this.props.children}
			</div>
		);
	}
}

export default App;
