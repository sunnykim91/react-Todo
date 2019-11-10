import React, { Component } from "react";
import Store from "../store";

class inputBox extends Component {
  render() {
    return (
      <Store.Consumer>
        {({ state, actions }) => {
          return (
            <input
              className="input-todo"
              placeholder="What needs to be done?"
              onChange={actions.onChangeInput}
              value={state.value}
              onKeyUp={actions.addTodo}
              autoFocus
            />
          );
        }}
      </Store.Consumer>
    );
  }
}

export default inputBox;
