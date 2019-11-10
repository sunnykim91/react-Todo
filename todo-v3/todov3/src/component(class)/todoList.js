import React, { Component } from "react";

class todoList extends Component {
  render() {
    const { checkedChange, removeTodo, todos, navState } = this.props;

    return (
      <ul className="todos">
        {todos
          .filter(todo => {
            if (navState === "Active") {
              return !todo.completed;
            }
            if (navState === "Completed") {
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
                  onChange={() => checkedChange(todo.id)}
                />
                <label htmlFor={`ck-${todo.id}`}>{todo.content}</label>
                <i
                  className="remove-todo far fa-times-circle"
                  onClick={() => {
                    removeTodo(todo.id);
                  }}
                ></i>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default todoList;
