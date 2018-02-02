import React from 'react';
import { Link } from 'react-router';

export default () => {
	return (
		<nav className = "navbar navbar-default">
			<div className = "container-fluid">
				<div className = "navbar-header">
					<Link to= "/formcompleter" className = "navbar-brand"> Dr Rana Form Completer</Link>
				</div>

				<div className = "collapse navbar-collapse">
					<ul className = "nav navbar-nav navbar-right">
						<li><Link to="/signup">Sign up </Link></li>
					</ul>
				</div>

				<div className = "collapse navbar-collapse">
					<ul className = "nav navbar-nav navbar-right">
						<li><Link to="/signin">Sign in </Link></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}