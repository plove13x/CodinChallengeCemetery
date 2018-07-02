import React from 'react';
import ReactDOM from 'react-dom';
import Cemetery from './components/Cemetery';
import ChallengeContainer from './components/ChallengeContainer';
import ToDoListApp from './components/ToDoListApp';
import styles from './app.css';

const appDescriptions = {
	ToDoListApp: <img src="../screenshots/testA.png" />
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