import React, { Component, createRef } from "react";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "HTML", completed: false },
      { id: 2, content: "CSS", completed: true },
      { id: 3, content: "Javascript", completed: false }
    ],
    value: ""
  };

  inputRef = createRef();

  onChangeInput = e => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  addTodo = e => {
    if (e.keyCode !== 13) return;
    this.setState(prevState => {
      return {
        todos: [
          ...prevState.todos,
          {
            id: this.generateId(),
            content: this.state.value,
            completed: false
          }
        ],
        value: ""
      };
    });
  };

  generateId = () => {
    const { todos } = this.state;

    return !todos.length ? 1 : Math.max(...todos.map(todo => todo.id)) + 1;
  };

  checkedChange = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    });
  };

  removeTodo = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const { value, todos } = this.state;
    console.log(todos);

    return (
      <>
        <div className="container">
          <h1 className="title">Todos</h1>
          <div className="ver">1.0</div>

          <input
            className="input-todo"
            placeholder="What needs to be done?"
            ref={this.inputRef}
            value={value}
            onChange={this.onChangeInput}
            onKeyUp={this.addTodo}
            autoFocus
          />
          <ul className="nav">
            <li id="all" className="active">
              All
            </li>
            <li id="active">Active</li>
            <li id="completed">Completed</li>
          </ul>

          <ul className="todos">
            {todos.map(todo => {
              return (
                <li key={todo.id} id={todo.id} className="todo-item">
                  <input
                    className="custom-checkbox"
                    type="checkbox"
                    id={`ck-${todo.id}`}
                    checked={todo.completed}
                    onChange={() => this.checkedChange(todo.id)}
                  />
                  <label htmlFor={`ck-${todo.id}`}>{todo.content}</label>
                  <i
                    className="remove-todo far fa-times-circle"
                    onClick={() => {
                      this.removeTodo(todo.id);
                    }}
                  ></i>
                </li>
              );
            })}
          </ul>
          <div className="footer">
            <div className="complete-all">
              <input
                className="custom-checkbox"
                type="checkbox"
                id="ck-complete-all"
              />
              <label htmlFor="ck-complete-all">Mark all as complete</label>
            </div>
            <div className="clear-completed">
              <button className="btn">
                Clear completed (<span className="completed-todos">0</span>)
              </button>
              <strong className="active-todos">0</strong> items left
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
