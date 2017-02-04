import React, { PureComponent } from 'react';

export default class TextInput extends PureComponent {
  constructor(props) {
    super(props)

    this.updateName = this.updateName.bind(this)
  }

  render() {
    console.log("TextInput's render() called!")

    return (
      <input type='text' value={this.props.name} onChange={this.updateName} />
    )
  }

  updateName(e) {
    this.props.setName(e.target.value)
  }

  // shouldComponentUpdate() {
  //   return false
  // }
}
