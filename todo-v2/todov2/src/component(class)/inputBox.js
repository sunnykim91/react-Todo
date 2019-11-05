import React, { Component } from "react";

class inputBox extends Component {
  render() {
    const { addTodo, value, onChangeInput } = this.props;
    return (
      <input
        className="input-todo"
        placeholder="What needs to be done?"
        onChange={onChangeInput}
        value={value}
        onKeyUp={addTodo}
        autoFocus
      />
    );
  }
}

export default inputBox;
