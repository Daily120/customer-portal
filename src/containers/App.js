import React, { Component } from 'react';
import './App.css';
import LoginPage from '../components/LoginPage/LoginPage';
import CustomerDetailsPage from '../components/CustomerDetailsPage/CustomerDetailsPage';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        {/* <LoginPage /> */}
        <CustomerDetailsPage />
      </div>
    );
  }
}

export default App;
