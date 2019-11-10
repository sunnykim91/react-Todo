import React, { Component } from "react";
import InputBox from "./inputBox";
import Navigation from "./navigation";
import TodoList from "./todoList";
import Footer from "./footer";
import Store from "../store";

class mainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, content: "HTML", completed: false },
        { id: 2, content: "CSS", completed: true },
        { id: 3, content: "Javascript", completed: false }
      ],
      navState: "All",
      navItems: [
        { id: 1, navVal: "All" },
        { id: 2, navVal: "Active" },
        { id: 3, navVal: "Completed" }
      ],
      value: ""
    };

    this.actions = {
      onChangeInput: e => {
        e.preventDefault();
        this.setState({ value: e.target.value });
      },
      generateId: () => {
        const { todos } = this.state;

        return !todos.length ? 1 : Math.max(...todos.map(todo => todo.id)) + 1;
      },
      addTodo: e => {
        const content = this.state.value.trim();
        if (e.keyCode !== 13 || content === "") return;
        this.setState(prevState => {
          return {
            todos: [
              ...prevState.todos,
              {
                id: this.actions.generateId(), // 주의 해야할 점
                content,
                completed: false
              }
            ]
          };
        });
        this.setState({ value: "" });
      },
      checkedChange: id => {
        this.setState(prevState => {
          return {
            todos: prevState.todos.map(todo =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
          };
        });
      },
      removeTodo: id => {
        const { todos } = this.state;
        this.setState({
          todos: todos.filter(todo => todo.id !== id)
        });
      },
      allComplete: e => {
        this.setState({
          todos: this.state.todos.map(todo => {
            return { ...todo, completed: e.target.checked };
          })
        });
      },
      clearComplete: () => {
        this.setState({
          todos: this.state.todos.filter(todo => todo.completed === false)
        });
      },
      completedNumber: () => {
        return this.state.todos.filter(todo => todo.completed === true).length;
      },
      unCompletedNumber: () => {
        return this.state.todos.filter(todo => todo.completed === false).length;
      },
      changeNav: navId => {
        // console.log(navId);
        if (navId === 1) {
          this.setState({ navState: "All" });
        } else if (navId === 2) {
          this.setState({ navState: "Active" });
        } else {
          this.setState({ navState: "Completed" });
        }
      }
    };
  }

  render() {
    console.log(this.state.todos);
    const { state, actions } = this;
    const value = { state, actions };
    return (
      <Store.Provider value={value}>
        <div className="container">
          <h1 className="title">Todos</h1>
          <div className="ver">3.0</div>
          <InputBox />
          <Navigation />
          <TodoList />
          <Footer />
        </div>
      </Store.Provider>
    );
  }
}

export default mainView;
