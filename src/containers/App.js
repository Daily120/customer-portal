import React, { Component } from 'react';
import './App.css';
import LoginPage from '../components/LoginPage/LoginPage';
import CustomerDetailsPage from '../components/CustomerDetailsPage/CustomerDetailsPage';
import AddPassenger from '../components/AddPassenger/AddPassenger';
import AddTrip from '../components/AddTrip/AddTrip';

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
        {/* <CustomerDetailsPage /> */}
        <AddPassenger />
        <AddTrip />
      </div>
    );
  }
}

export default App;
