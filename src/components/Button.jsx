import React, { Component } from 'react';

class Button extends Component {
    render() {
        return <button className="button" index={this.props.index} name={this.props.buttonLabel} onClick={this.props.buttonClick}>
            {this.props.buttonLabel}
        </button>;
    }
}

export default Button;