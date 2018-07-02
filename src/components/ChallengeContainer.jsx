import React, { Component } from 'react';
import ChallengeHeader from './ChallengeHeader';
import ToDoListApp from './ToDoListApp';
import JSPlaygroundTemplate from './JSPlaygroundTemplate';

class ChallengeContainer extends Component {


    render() {
    	// const Yo = React.createElement(this.props.appIsLive, {color: 'red'}, null);
		const components = {
			ToDoListApp,
            JSPlaygroundTemplate
		};

		const SpecificApp = components[this.props.appIsLive];

        return (
        	<React.Fragment>
	        	<ChallengeHeader loadCemetery={this.props.loadCemetery} />
	        	<div className="specificApp">
                    <SpecificApp />
                </div>
                {this.props.appDescription ? this.props.appDescription : null}
        	</React.Fragment>
        );
    }
}

export default ChallengeContainer;