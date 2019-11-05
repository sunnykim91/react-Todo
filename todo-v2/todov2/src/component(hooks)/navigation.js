import React, { Component } from "react";

class navigation extends Component {
  render() {
    const { changeNav, navState, navItems } = this.props;

    return (
      <ul className="nav">
        {navItems.map(navItem => {
          return (
            <li
              key={navItem.id}
              className={navItem.navVal === navState ? "active" : null}
              onClick={() => changeNav(navItem.id)}
            >
              {navItem.navVal}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default navigation;
