import React from "react";
import { TodoConsumer } from "./mainView";

const navigation = () => {
  return (
    <TodoConsumer>
      {value => (
        <ul className="nav">
          {value.state.navItems.map(navItem => {
            return (
              <li
                key={navItem.id}
                className={
                  navItem.navVal === value.state.navState ? "active" : null
                }
                onClick={() => value.actions.changeNav(navItem.id)}
              >
                {navItem.navVal}
              </li>
            );
          })}
        </ul>
      )}
    </TodoConsumer>
  );
};

export default navigation;
