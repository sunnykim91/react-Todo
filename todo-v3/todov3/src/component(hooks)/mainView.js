import React, { useState, createContext } from "react";
import InputBox from "./inputBox";
import Navigation from "./navigation";
import TodoList from "./todoList";
import Footer from "./footer";

const TodoContext = createContext(null);
const { Consumer: TodoConsumer } = TodoContext;

const MainView = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: "HTML", completed: false },
    { id: 2, content: "CSS", completed: true },
    { id: 3, content: "Javascript", completed: false }
  ]);
  const [InputValue, setInputValue] = useState("");
  const [navState, setNavState] = useState("All");
  const navItems = [
    { id: 1, navVal: "All" },
    { id: 2, navVal: "Active" },
    { id: 3, navVal: "Completed" }
  ];

  const onChangeInput = e => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const addTodo = e => {
    const content = InputValue.trim();
    if (e.keyCode !== 13 || content === "") return;
    setTodos(prevTodos => [
      ...prevTodos,
      { id: generateId(), content, completed: false }
    ]);
    setInputValue("");
  };

  const generateId = () => {
    return !todos.length ? 1 : Math.max(...todos.map(todo => todo.id)) + 1;
  };

  const checkedChange = id => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const allComplete = e => {
    setTodos(
      todos.map(todo => {
        return { ...todo, completed: e.target.checked };
      })
    );
  };

  const clearComplete = () => {
    setTodos(todos.filter(todo => todo.completed === false));
  };

  const completedNumber = () => {
    return todos.filter(todo => todo.completed === true).length;
  };

  const unCompletedNumber = () => {
    return todos.filter(todo => todo.completed === false).length;
  };

  const changeNav = navId => {
    if (navId === 1) {
      setNavState("All");
    } else if (navId === 2) {
      setNavState("Active");
    } else {
      setNavState("Completed");
    }
  };

  const value = {
    state: { todos, InputValue, navState, navItems },
    actions: {
      onChangeInput,
      addTodo,
      checkedChange,
      removeTodo,
      allComplete,
      clearComplete,
      completedNumber,
      unCompletedNumber,
      changeNav
    }
  };

  return (
    <TodoContext.Provider value={value}>
      <div className="container">
        <h1 className="title">Todos</h1>
        <div className="ver">3.0</div>
        <InputBox />
        <Navigation />
        <TodoList />
        <Footer />
      </div>
    </TodoContext.Provider>
  );
};

export { TodoConsumer };

export default MainView;
