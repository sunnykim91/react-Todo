import React from "react";

interface Props {
  addTodo: any;
  value: string;
  onChangeInput: any;
}

const InputBox: React.SFC<Props> = ({ addTodo, value, onChangeInput }) => {
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

export default InputBox;
