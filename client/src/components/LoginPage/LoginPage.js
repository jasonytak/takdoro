import React, { Component } from 'react';

class LoginPage extends Component {
  state = { user: '' };

  onFormSubmit = event => {
    event.preventDefault();
  };

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
              placeholder="Enter Initials..."
              onChange={e =>
                this.setState({ user: e.target.value.toUpperCase() })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
