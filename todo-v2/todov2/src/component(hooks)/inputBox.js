import React from "react";

const inputBox = ({ addTodo, value, onChangeInput }) => {
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
};

export default inputBox;
