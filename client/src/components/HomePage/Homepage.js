import './HomePage.css';
import React, { Component } from 'react';
import TimerControl from '../TimerControl/TimerControl';
import UserList from '../UserList/UserList';

class HomePage extends Component {
  state = { backgroundColor: '#002266' };

  changeBreakBackground = () => {
    this.setState({ backgroundColor: 'blue' });
  };

  changeWorkBackground = () => {
    this.setState({ backgroundColor: 'red' });
  };

  render() {
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

// const HomePage = props => {
//   return (
//     <div className="home-page">
//       <div className="ui container middle centered aligned one column grid">
//         <div className="row">
//           <TimerControl />
//         </div>
//         <div className="row">
//           <UserList users={props.users} />
//         </div>
//       </div>
//     </div>
//   );
// };

export default HomePage;
