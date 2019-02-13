import React, { Component } from 'react';
import LoginPage from '../LoginPage/LoginPage';
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
      <div>
        <LoginPage onSubmit={this.onSubmit } />
      </div>
    );
  }
}

export default App;
