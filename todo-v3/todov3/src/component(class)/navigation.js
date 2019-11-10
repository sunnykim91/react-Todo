import React, { Component } from "react";
import Store from "../store";

class navigation extends Component {
  render() {
    return (
      <Store.Consumer>
        {({ state, actions }) => {
          return (
            <ul className="nav">
              {state.navItems.map(navItem => {
                return (
                  <li
                    key={navItem.id}
                    className={
                      navItem.navVal === state.navState ? "active" : null
                    }
                    onClick={() => actions.changeNav(navItem.id)}
                  >
                    {navItem.navVal}
                  </li>
                );
              })}
            </ul>
          );
        }}
      </Store.Consumer>
    );
  }
}

export default navigation;
