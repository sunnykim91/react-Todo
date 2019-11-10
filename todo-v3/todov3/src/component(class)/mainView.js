import React, { Component } from "react";
import InputBox from "./inputBox";
import Navigation from "./navigation";
import TodoList from "./todoList";
import Footer from "./footer";
import Store from "../store";

class mainView extends Component {
  constructor(props) {
    super(props);

    this.onChangeInput = e => {
      e.preventDefault();
      this.setState({ value: e.target.value });
    };

    this.addTodo = e => {
      const content = this.state.value.trim();
      if (e.keyCode !== 13 || content === "") return;
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
      this.setState({ value: "" });
    };

    this.generateId = () => {
      const { todos } = this.state;

      return !todos.length ? 1 : Math.max(...todos.map(todo => todo.id)) + 1;
    };

    this.checkedChange = id => {
      this.setState(prevState => {
        return {
          todos: prevState.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        };
      });
    };

    this.removeTodo = id => {
      const { todos } = this.state;
      this.setState({
        todos: todos.filter(todo => todo.id !== id)
      });
    };

    this.allComplete = e => {
      this.setState({
        todos: this.state.todos.map(todo => {
          return { ...todo, completed: e.target.checked };
        })
      });
    };

    this.clearComplete = () => {
      this.setState({
        todos: this.state.todos.filter(todo => todo.completed === false)
      });
    };

    this.completedNumber = () => {
      return this.state.todos.filter(todo => todo.completed === true).length;
    };

    this.unCompletedNumber = () => {
      return this.state.todos.filter(todo => todo.completed === false).length;
    };

    this.changeNav = navId => {
      // console.log(navId);
      if (navId === 1) {
        this.setState({ navState: "All" });
      } else if (navId === 2) {
        this.setState({ navState: "Active" });
      } else {
        this.setState({ navState: "Completed" });
      }
    };

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
      value: "",
      onChangeInput: this.onChangeInput,
      addTodo: this.addTodo,
      checkedChange: this.checkedChange,
      removeTodo: this.removeTodo,
      allComplete: this.allComplete,
      clearComplete: this.clearComplete,
      completedNumber: this.completedNumber,
      unCompletedNumber: this.unCompletedNumber,
      changeNav: this.changeNav
    };
  }

  render() {
    console.log(this.state.todos);
    return (
      <Store.Provider value={this.state}>
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
