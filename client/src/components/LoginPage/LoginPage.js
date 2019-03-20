import './LoginPage.css'
import React, { Component } from 'react';

class LoginPage extends Component {
  state = { user: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.user);
  };

  render() {
    return (
      <div className="login-page">
        <div className="ui container middle centered aligned grid">
          <div className="ui text container row">
            <h1>WELCOME TO THE GLOBAL WORK TIMER</h1>
          </div>
          <div className="ui text container row">
            AT THE START OF EVERY HOUR, WORK FOR 25 MINUTES. THEN BREAK FOR 5.
            REPEAT THIS AT EVERY HALF HOUR AND HOUR.
          </div>
          <div className="ui text container row">
            SLOWLY BUT SURELY YOU'LL FINISH WHATEVER YOU NEED TO DO.
          </div>
          <div className="row">
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                <label className="ui text container row">
                  ENTER YOUR INITIALS TO JOIN IN AT ANY TIME.
                </label>
                <input
                  type="text"
                  value={this.state.user}
                  maxLength={2}
                  onChange={e =>
                    this.setState({ user: e.target.value.toUpperCase() })
                  }
                />
              </div>
              <button className="mini ui button" type="submit">
                <span>JOIN THE SESSION</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
