import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/Homepage';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

class App extends Component {
  state = { users: [], socketID: null };

  componentDidMount() {
    socket.on('socketID', (socketID) => this.setState({socketID}));
  }

  onSubmit = user => {
    axios
      .post('/user', { user })
      .then(axios.get('/find').then(res => this.setState({ users: res.data })))
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
