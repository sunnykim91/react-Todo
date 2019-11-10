import React, { Component } from "react";
import Store from "../store";

class inputBox extends Component {
  render() {
    return (
      <Store.Consumer>
        {store => {
          return (
            <input
              className="input-todo"
              placeholder="What needs to be done?"
              onChange={store.onChangeInput}
              value={store.value}
              onKeyUp={store.addTodo}
              autoFocus
            />
          );
        }}
      </Store.Consumer>
    );
  }
}

export default inputBox;
