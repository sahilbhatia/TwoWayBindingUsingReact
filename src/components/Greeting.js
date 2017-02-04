import React, { PureComponent } from 'react';
import Label from './Label.js';

export default class Greeting extends PureComponent {
  render() {
    console.log("Greeting's render() called!")

    return (
      <div className='greeting'>
        <Label obj={{ text: this.props.text }} />
      </div>
    )
  }

  // shouldComponentUpdate() {
  //   return false
  // }
}
