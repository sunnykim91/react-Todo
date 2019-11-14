import React from "react";

interface Props {
  changeNav(id: number): void;
  navState: string;
  navItems: NavItems[];
}

interface NavItems {
  id: number;
  navVal: string;
}

const Navigation: React.SFC<Props> = ({ changeNav, navState, navItems }) => {
  return (
    <ul className="nav">
      {navItems.map(navItem => {
        return (
          <li
            key={navItem.id}
            className={navItem.navVal === navState ? "active" : undefined}
            onClick={() => changeNav(navItem.id)}
          >
            {navItem.navVal}
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
