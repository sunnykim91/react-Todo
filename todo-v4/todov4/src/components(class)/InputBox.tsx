import React, { Component } from "react";

interface Props {
  addTodo(): any;
  value: string;
  onChangeInput(): any;
}

class inputBox extends React.Component<Props> {
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
