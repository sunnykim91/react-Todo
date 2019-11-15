import React from "react";

interface Props {
  checkedChange(id: number): void;
  removeTodo(id: number): void;
  todos: Todos[];
  navState: string;
}

interface Todos {
  id: number;
  content: string;
  completed: boolean;
}

const TodoList: React.SFC<Props> = ({
  checkedChange,
  removeTodo,
  todos,
  navState
}) => {
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
            <li key={todo.id} id={`${todo.id}`} className="todo-item">
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
};

export default TodoList;
