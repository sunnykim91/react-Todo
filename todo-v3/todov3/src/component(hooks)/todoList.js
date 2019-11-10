import React from "react";
import { TodoConsumer } from "./mainView";

const todoList = () => {
  return (
    <TodoConsumer>
      {value => (
        <ul className="todos">
          {value.state.todos
            .filter(todo => {
              if (value.state.navState === "Active") {
                return !todo.completed;
              }
              if (value.state.navState === "Completed") {
                return todo.completed;
              }
              return true;
            })
            .map(todo => {
              return (
                <li key={todo.id} id={todo.id} className="todo-item">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    id={`ck-${todo.id}`}
                    checked={todo.completed}
                    onChange={() => value.actions.checkedChange(todo.id)}
                  />
                  <label htmlFor={`ck-${todo.id}`}>{todo.content}</label>
                  <i
                    className="remove-todo far fa-times-circle"
                    onClick={() => {
                      value.actions.removeTodo(todo.id);
                    }}
                  ></i>
                </li>
              );
            })}
        </ul>
      )}
    </TodoConsumer>
  );
};

export default todoList;
