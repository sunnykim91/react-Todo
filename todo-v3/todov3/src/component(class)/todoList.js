import React, { Component } from "react";
import Store from "../store";

class todoList extends Component {
  render() {
    return (
      <Store.Consumer>
        {({ state, actions }) => {
          return (
            <ul className="todos">
              {state.todos
                .filter(todo => {
                  if (state.navState === "Active") {
                    return !todo.completed;
                  }
                  if (state.navState === "Completed") {
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
                        onChange={() => actions.checkedChange(todo.id)}
                      />
                      <label htmlFor={`ck-${todo.id}`}>{todo.content}</label>
                      <i
                        className="remove-todo far fa-times-circle"
                        onClick={() => {
                          actions.removeTodo(todo.id);
                        }}
                      ></i>
                    </li>
                  );
                })}
            </ul>
          );
        }}
      </Store.Consumer>
    );
  }
}

export default todoList;
