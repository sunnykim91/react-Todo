import React from "react";

const navigation = ({ changeNav, navState, navItems }) => {
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
};

export default navigation;
