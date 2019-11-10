import React from "react";
import { TodoConsumer } from "./mainView";

const inputBox = () => {
  return (
    <TodoConsumer>
      {value => (
        <input
          className="input-todo"
          placeholder="What needs to be done?"
          onChange={value.actions.onChangeInput}
          value={value.state.InputValue}
          onKeyUp={value.actions.addTodo}
          autoFocus
        />
      )}
    </TodoConsumer>
  );
};

export default inputBox;
