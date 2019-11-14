import React from "react";
import InputBox from "./InputBox";
import Navigation from "./Navigation";
import TodoList from "./TodoList";
import Footer from "./Footer";

interface Props {}

interface State {
  todos: Todos[];
  navState: string;
  navItems: NavItems[];
  input: string;
}

interface Todos {
  id: number;
  content: string;
  completed: boolean;
}

interface NavItems {
  id: number;
  navVal: string;
}

class mainView extends React.Component<Props, State> {
  state: State = {
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
    input: ""
  };

  onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({ input: e.target.value });
  };

  addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const content = this.state.input.trim();
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
    this.setState({ input: "" });
  };

  generateId = (): number => {
    const { todos } = this.state;

    return !todos.length ? 1 : Math.max(...todos.map(todo => todo.id)) + 1;
  };

  checkedChange = (id: number) => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    });
  };

  removeTodo = (id: number) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };

  allComplete = (e: any) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        return { ...todo, completed: e.target.checked };
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

  changeNav = (navId: number) => {
    // console.log(navId);
    if (navId === 1) {
      this.setState({ navState: "All" });
    } else if (navId === 2) {
      this.setState({ navState: "Active" });
    } else {
      this.setState({ navState: "Completed" });
    }
  };

  render() {
    const { todos, navItems, input } = this.state;
    return (
      <div className="container">
        <h1 className="title">Todos</h1>
        <div className="ver">2.0</div>
        <InputBox
          onChangeInput={this.onChangeInput}
          addTodo={this.addTodo}
          value={input}
        />
        <Navigation
          changeNav={this.changeNav}
          navState={this.state.navState}
          navItems={navItems}
        />
        <TodoList
          checkedChange={this.checkedChange}
          removeTodo={this.removeTodo}
          todos={todos}
          navState={this.state.navState}
        />
        <Footer
          allComplete={this.allComplete}
          clearComplete={this.clearComplete}
          completedNumber={this.completedNumber}
          unCompletedNumber={this.unCompletedNumber}
        />
      </div>
    );
  }
}

export default mainView;
