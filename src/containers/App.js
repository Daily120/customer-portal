import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header/Header';
import LoginForm from '../components/LoginForm/LoginForm';
import CustomerDetailsPage from '../components/CustomerDetailsPage/CustomerDetailsPage';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount = () => {
    if(localStorage.token) {
      const auth = `Bearer ${localStorage.token}`;
      fetch('http://localhost:3001/auth', {
        headers: {
          authorization: auth
        }
      }).then(res => res.json())
      .then(data => this.setState(data))
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        {
          localStorage.token ? <CustomerDetailsPage /> : <LoginForm app={this} /> 
        }
      </div>
    );
  }
}

export default App;
