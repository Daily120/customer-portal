import React, { Component } from 'react';
import './App.css';
import LoginPageHolder from '../components/LoginPageHolder/LoginPageHolder';
import BasicInfo from '../components/BasicInfo/BasicInfo';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        {/* <LoginPageHolder /> */}
        <BasicInfo />
      </div>
    );
  }
}

export default App;
