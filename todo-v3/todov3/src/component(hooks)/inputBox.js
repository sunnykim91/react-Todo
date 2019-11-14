import React, {useContext} from "react";
import {TodoContext} from "./mainView";

const InputBox = () => {
  const {state, actions} = useContext(TodoContext);

  return (
      
        <input
          className="input-todo"
          placeholder="What needs to be done?"
          onChange={actions.onChangeInput}
          value={state.InputValue}
          onKeyUp={actions.addTodo}
          autoFocus
        />
  );
};

export default InputBox;
