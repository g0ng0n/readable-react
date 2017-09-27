import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            backend: 'backend-data'
        }
    }

    componentDidMount() {
        const url = `${process.env.REACT_APP_BACKEND}/categories`;
        console.log('fetching from url', url);
        fetch(url, { headers: { 'Authorization': 'whatever-you-want' },
            credentials: 'include' } )
            .then( (res) => { return(res.text()) })
            .then((data) => {
                this.setState({backend:data});
            });
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
