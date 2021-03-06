import './HomePage.css';
import React, { Component } from 'react';
import TimerControl from '../TimerControl/TimerControl';
import UserList from '../UserList/UserList';
import { Redirect } from 'react-router';

class HomePage extends Component {
  state = { backgroundColor: '#002266' };

  changeBreakBackground = () => {
    this.setState({ backgroundColor: '#E2924D' });
  };

  changeWorkBackground = () => {
    this.setState({ backgroundColor: '#33BA96' });
  };

  render() {
    if (this.props.users.length === 0) {
      return <Redirect to="/" />;
    }

    return (
      <div
        style={{ backgroundColor: this.state.backgroundColor }}
        className="home-page"
      >
        <div className="ui container middle centered aligned one column grid">
          <div className="row">
            <TimerControl
              changeBreakBackground={this.changeBreakBackground}
              changeWorkBackground={this.changeWorkBackground}
            />
          </div>
          <div className="row">
            <UserList users={this.props.users} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
