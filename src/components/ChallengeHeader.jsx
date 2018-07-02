import React, { Component } from 'react';
import Button from './Button';

class ChallengeHeader extends Component {

    render() {
        return (
        	<div className="challengeHeader">
        		<Button buttonLabel="Back 2 Cemetery" buttonClick={this.props.loadCemetery} />
        	</div>
        );
    }
}

export default ChallengeHeader;