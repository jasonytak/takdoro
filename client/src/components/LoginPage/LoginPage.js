import React, { Component } from 'react';

class LoginPage extends Component {
  state = { user: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.user);
  };

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.onFormSubmit} className="ui form">
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
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
