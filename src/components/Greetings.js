import React from 'react';
import NavigationBar from './NavigationBar';

class Greetings extends React.Component {
  render() {
    return (
    <div>
      <div className="jumbotron">
        <h1>Hi!</h1>
      </div>
      <NavigationBar />
		{this.props.children}
    </div>
    );
  }
}

export default Greetings;