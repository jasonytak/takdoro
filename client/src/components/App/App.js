import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/Homepage';
import axios from 'axios';

class App extends Component {
  state = { users: [] };

  onSubmit = user => {
    axios
      .post('/user', { user })
      .then(res =>
        this.setState(state => {
          const users = this.state.users.concat(res.data);
          return { users };
        })
      )
      .catch(error => console.log(error.response));
  };

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LoginPage} />
          <Route path="/home" component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
