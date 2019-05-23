import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/Homepage';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io('https://mighty-peak-22764.herokuapp.com/');

class App extends Component {
  state = { users: [], socketID: null };

  componentDidMount() {
    // Establishes socket ID once user has loaded site
    socket.on('socketID', socketID => this.setState({ socketID }));
    socket.on('update', () =>
      axios.get('/find').then(res => this.setState({ users: res.data }))
    );
  }

  onSubmit = user => {
    // Sends socketID to database to allow live user tracking
    // Emits new socketID to all connected users
    axios
      .post('/user', { user, socketID: this.state.socketID })
      .then(res => this.setState({ users: res.data }))
      .then(() => this.props.history.push('/home'))
      .then(() => socket.emit('update-all'))
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
