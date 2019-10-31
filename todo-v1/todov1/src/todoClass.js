import React, { Component, createRef } from "react";

class TodoClass extends Component {
  state = {
    todos: [
      { id: 1, content: "HTML", completed: false },
      { id: 2, content: "CSS", completed: true },
      { id: 3, content: "Javascript", completed: false }
    ],
    navState: 'All'
  };

  inputRef = createRef();
  checkRef = createRef();

  onChangeInput = e => {
    e.preventDefault();
    this.setState({ inputRef: e.target.value });
  };

  addTodo = e => {
    const content = this.inputRef.current.value.trim();
    if (e.keyCode !== 13) return;
    this.setState(prevState => {
      return {
        todos: [
          ...prevState.todos,
          {
            id: this.generateId(),
            content,
            completed: false
          }
        ]
      };
    });
    this.inputRef.current.value = "";
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

  allComplete = () => {
    this.setState({
      todos: this.state.todos.map(todo => {
        return { ...todo, completed: this.checkRef.current.checked };
      })
    });
  };

  clearComplete = () => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.completed === false)
    });
  };

  completedNumber = () => {
    return this.state.todos.filter(todo => todo.completed === true).length;
  };

  unCompletedNumber = () => {
    return this.state.todos.filter(todo => todo.completed === false).length;
  };

  changeNav = (navId) => {
    // console.log(navId);
    if(navId === 1) {
      this.setState({navState: 'All'});
    } else if(navId === 2) {
      this.setState({navState: 'Active' });
    } else {
      this.setState({navState: 'Completed'});
    }
  };

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log(this.state.todos);
  //     console.log(nextState.todos);
  //     if (this.state.todos !== nextState.todos) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }

  render() {
    const { todos, navState } = this.state;
    const navItems = [{ id: 1, navVal: 'All' }, { id: 2, navVal: 'Active' }, { id: 3, navVal: 'Completed'}];

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
            onChange={this.onChangeInput}
            onKeyUp={this.addTodo}
            autoFocus
          />
          <ul className="nav">
            {navItems.map((navItem) => {
              return <li key={navItem.id} className={navItem.navVal === this.state.navState ? 'active' : null} onClick={() => this.changeNav(navItem.id)}>{navItem.navVal}</li>
            }
            )}
          </ul>

          <ul className="todos">
            {todos.filter( (todo) => {
              if(navState === 'Active') {return !todo.completed}
              if(navState === 'Completed') {return todo.completed}
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
                ref={this.checkRef}
                onChange={this.allComplete}
              />
              <label htmlFor="ck-complete-all">Mark all as complete</label>
            </div>
            <div className="clear-completed">
              <button className="btn" onClick={this.clearComplete}>
                Clear completed (
                <span className="completed-todos">
                  {this.completedNumber()}
                </span>
                )
              </button>
              <strong className="active-todos">
                {this.unCompletedNumber()}
              </strong>{" "}
              items left
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TodoClass;
