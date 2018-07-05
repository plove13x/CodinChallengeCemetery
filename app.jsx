import React from 'react';
import ReactDOM from 'react-dom';
import Cemetery from './src/components/Cemetery';
import ChallengeContainer from './src/components/ChallengeContainer';
import ToDoListApp from './src/components/ToDoListApp';
import styles from './src/app.css';

const appDescriptions = {
	ToDoListApp: <img src="./screenshots/testA.png" />
};

class App extends React.Component {
	    constructor(){
	        super();
	        this.state = {
	        	appIsLive: false,
	        };
	        this.loadApp = this.loadApp.bind(this);
	        this.loadCemetery = this.loadCemetery.bind(this);
	    }

	    loadApp(app) {
	    	this.setState({appIsLive: app});
	    }

	    loadCemetery() {
	    	this.setState({appIsLive: false});
	    }

	    render() {
	    	return this.state.appIsLive ? <ChallengeContainer loadCemetery={this.loadCemetery} appIsLive={this.state.appIsLive} appDescription={appDescriptions[this.state.appIsLive]} /> : <Cemetery loadApp={this.loadApp} />;
	    }
}

ReactDOM.render(
   <App />,
   document.getElementById('app')
);