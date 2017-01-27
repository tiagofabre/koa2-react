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
    this.setState(value)
  }

  render () {
    return (

      <div className="container">
        <div className="row">
          <div className="col-centered">
            <h1>React app 💪</h1>
            <p>Simple react app consuming an REST API</p>
            <ul>
              {
                this.state.requestState.map((element) => {
                  return <li>{ element.id } - { element.name}</li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
