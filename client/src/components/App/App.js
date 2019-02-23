import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
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
      .then(() => this.props.history.push('/home'))
      .catch(error => console.log(error.response));
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={props => <LoginPage {...props} onSubmit={this.onSubmit} />}
        />
        <Route
          path="/home"
          render={props => <HomePage {...props} users={this.state.users} />}
        />
      </div>
    );
  }
}

export default withRouter(App);
