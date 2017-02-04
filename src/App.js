import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Label from './components/Label.js';
import TextInput from './components/TextInput.js';
import Greeting from './components/Greeting.js';

export default class App extends PureComponent {
  constructor(props) {
    console.log('constructor() called!')

    super(props)

    this.updateFirstName = this.updateFirstName.bind(this)
    this.updateLastName = this.updateLastName.bind(this)

    this.state = {
      firstName: 'Guest',
      lastName: 'User'
    }
  }

  render() {
    console.log("Main app's render() called!")

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Greeting text={this.fullName()} />
        <br />

        <Label text='Enter your first name: ' />
        <TextInput name={this.state.firstName} setName={this.updateFirstName} />
        <br />
        <Label text='Enter your last name: ' />
        <TextInput name={this.state.lastName} setName={this.updateLastName} />
      </div>
    );
  }

  updateFirstName(newName) {
    this.setState((prevState, props) => ({
      firstName: newName
    }))
  }

  updateLastName(newName) {
    this.setState((prevState, props) => ({
      lastName: newName
    }))
  }

  fullName() {
    return `${this.state.firstName} ${this.state.lastName}`
  }


  // These methods are called when an instance of a component is
  // being created and inserted into the DOM
  componentWillMount() {
    console.log('App componentWillMount() called!')
  }

  componentDidMount() {
    console.log('App componentDidMount() called!')
  }

  // This method is called when a component is being removed from the DOM
  componentWillUnmount() {
    console.log('App componentWillUnmount() called!')
  }

  // An update can be caused by changes to props or state.
  // These methods are called when a component is being re-rendered
  componentWillReceiveProps() {
    console.log('App componentWillReceiveProps() called!')
  }

  // shouldComponentUpdate() {
  //   console.log('App shouldComponentUpdate() called!')
  //   return true
  // }

  componentWillUpdate() {
    console.log('App componentWillUpdate() called!')
  }

  componentDidUpdate() {
    console.log('App componentDidUpdate() called!')
  }
}
