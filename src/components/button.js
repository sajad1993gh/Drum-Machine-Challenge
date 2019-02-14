import React, { Component } from 'react';

class Button extends Component {
  render() {
    return(
      <div>
      // Add additional attributes here
        id={this.prop.buttons}
        className='button'
        onClick={this.props.playSound}
        <p>{this.props.sound}</p>

      </div>
    );
  }
}

export default Button;
