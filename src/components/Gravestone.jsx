import React from 'react';
import Button from './Button';

class Gravestone extends React.Component {
	    constructor(){
	        super();
	    }

	    render() {
	        return (
	        	<button style={this.props.style} className="gravestone" index={this.props.index} name={this.props.buttonLabel} onClick={this.props.buttonClick}>
	        	    {this.props.buttonLabel}
	        	    <p>{this.props.dates}</p>
		        </button>
		    );
	    }
}

export default Gravestone;