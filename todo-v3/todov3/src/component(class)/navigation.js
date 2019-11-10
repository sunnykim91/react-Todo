import React, { Component } from "react";
import Store from "../store";

class navigation extends Component {
  render() {
    return (
      <Store.Consumer>
        {store => {
          return (
            <ul className="nav">
              {store.navItems.map(navItem => {
                return (
                  <li
                    key={navItem.id}
                    className={
                      navItem.navVal === store.navState ? "active" : null
                    }
                    onClick={() => store.changeNav(navItem.id)}
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
