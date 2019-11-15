import React from "react";

interface Props {
  addTodo(e: React.KeyboardEvent<HTMLInputElement>): void;
  value: string;
  onChangeInput(e: React.ChangeEvent<HTMLInputElement> ): void;
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
