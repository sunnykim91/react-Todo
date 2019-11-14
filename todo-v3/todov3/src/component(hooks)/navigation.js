import React, {useContext} from "react";
import {TodoContext} from "./mainView";

const Navigation = () => {
  const {state, actions} = useContext(TodoContext);
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
};

export default Navigation;
