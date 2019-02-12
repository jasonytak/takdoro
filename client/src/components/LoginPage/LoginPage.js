import React, { Component } from 'react';

class LoginPage extends Component {
  state = { user: '' };

  onFormSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="login-container">
        <form className="ui form">
          <div className="field">
            <label>ENTER YOUR INITIALS TO JOIN IN AT ANY TIME</label>
            <input
              type="text"
              value={this.state.user}
              maxLength={2}
              onChange={e => this.setState({ user: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
