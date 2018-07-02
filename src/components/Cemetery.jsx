import React from 'react';
import Gravestone from './Gravestone';

class Cemetery extends React.Component {
	    constructor(){
	        super();
	    }

	    openOldJSP() {
	    	alert('Yo don\'t be scared; it\'s just the old verison of this with three codin\' challenges from back in 2015. They\'re extra crispy so I opened them in a new tab so we won\'t stink up the joint.');
	    	window.open('http://plove13x.github.io/JSPlayground/','_blank');
	    }

	    openBookkeeper() {
	    	alert('Be forewarned as I dig up this grave for you in a new tab: the requirements for this challenge included using https://github.com/typicode/json-server to create a full fake REST API. Therefore, while I can experience the ability to save changes on my local instance, any changes you make will not persist (but rather DIE) without JSON-server running.');
	    	window.open('https://plove13x.github.io/react-coding-challenge/public/index.html', '_blank');
	    }

	    render() {
	    	const graveStyles = (label) => {
	    		const graveValues = {
	    			ReactToDoList: ['40px 100px 12px', '40px 40px 100px', '10px 10px 0 0'],
	    			Bookkeeper: ['60px 100px 20px', '0 0 50px', '30px 30px 0 0'],
	    			JSPlaygroundTemplate: ['50px 50px 10px', '40px 0 100px', '3px 3px 0 0']
	    		};
	    		return {
		    		gridColumn: 'span 8',
		    		margin: graveValues[label][0],
		    		padding: graveValues[label][1],
		    		borderRadius: graveValues[label][2]
	    		}
	    	}
	        return (
	        	// <Gravestone style={{gridColumn: 'span 8', margin: 60, padding: 50}} buttonLabel="Bookkeeper" dates="1/Jun/18-5/Jun/18" buttonClick={this.test1} />
	        	// <Gravestone style={{gridColumn: 'span 8', paddingBottom: 100}} buttonLabel="JSPlaygroundTemplate" dates="15/May/15 - 31/Jul/15" buttonClick={this.openOldJSP} />
	        	// <h2 style={{gridColumn: 'span 24', marginTop: '5em'}}>You've gone too deep...get out before you get recoded...</h2>
	        	<div id='cemetery'>
	        		<h2 className='cemH2'>Welcome 2 Da Codin' Challenge Cemetery...</h2>
	        		<Gravestone style={graveStyles('ReactToDoList')} buttonLabel="React To-Do List" dates="26/Jun/18 - 27/Jun/18" buttonClick={() => this.props.loadApp('ToDoListApp')} />
	        		<Gravestone style={graveStyles('Bookkeeper')} buttonLabel="Bookkeeper" dates="1/Jun/18-5/Jun/18" buttonClick={this.openBookkeeper} />
	        		<Gravestone style={graveStyles('JSPlaygroundTemplate')} buttonLabel="JSPlaygroundTemplate" dates="15/May/15 - 31/Jul/15" buttonClick={this.openOldJSP} />
		        </div>
		    );
	    }

}

export default Cemetery;