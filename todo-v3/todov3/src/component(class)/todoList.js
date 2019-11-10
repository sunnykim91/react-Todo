import React, { Component } from "react";
import Store from "../store";

class todoList extends Component {
  render() {
    return (
      <Store.Consumer>
        {store => {
          return (
            <ul className="todos">
              {store.todos
                .filter(todo => {
                  if (store.navState === "Active") {
                    return !todo.completed;
                  }
                  if (store.navState === "Completed") {
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
                        onChange={() => store.checkedChange(todo.id)}
                      />
                      <label htmlFor={`ck-${todo.id}`}>{todo.content}</label>
                      <i
                        className="remove-todo far fa-times-circle"
                        onClick={() => {
                          store.removeTodo(todo.id);
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
