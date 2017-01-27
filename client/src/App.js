import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor () {
    super();

    // state
    this.state = {requestState: []};

    // binds
    this.makeRequest = this.makeRequest.bind(this);
    this.assignState = this.assignState.bind(this);
  }

  componentDidMount () {
    this.makeRequest()
  }

  makeRequest (event) {
    let corsConfig = { method: 'GET', mode: 'cors' }
    fetch('http://localhost:3000/getAllUsers', corsConfig)
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({requestState: data})
    })
  }

  assignState (value) {
    console.log(value)
    this.setState(value)
  }

  render () {
    return (

      <div className="container">
        <div className="row">
          <h1>Simple react app consuming an REST API</h1>
          <ul>
            {
              this.state.requestState.map((element) => {
                return <li>{ element.id } - { element.name}</li>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
