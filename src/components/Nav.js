import React, {Component} from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">
          ClassApp
        </div>
        <div className="nav-bar">
          <div className="">about</div>
          <div className="">students</div>
          <div className="">teachers</div>
        </div>
      </div>
    )
  }

}

export default Nav;
