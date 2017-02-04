import React, { PureComponent } from 'react';

export default class Label extends PureComponent {
  render() {
    console.log("Label's render() called!")

    if(this.props.obj === undefined) {
      console.log('rendering static label')
      return <label>{this.props.text}</label>
    }
    else {
      console.log('rendering greeting label')
      return <label>{this.props.obj.text}</label>
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return (this.props.text !== nextProps.text) ||
  //     ((this.props.obj && this.props.obj.text) !== (nextProps.obj && nextProps.obj.text))
  // }
}
