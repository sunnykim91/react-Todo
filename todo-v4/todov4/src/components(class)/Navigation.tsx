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

class navigation extends React.Component<Props> {
  render() {
    const { changeNav, navState, navItems } = this.props;

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
  }
}

export default navigation;
