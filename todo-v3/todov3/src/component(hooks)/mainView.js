import React, { useState } from "react";
import InputBox from "./inputBox";
import Navigation from "./navigation";
import TodoList from "./todoList";
import Footer from "./footer";

const MainView = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: "HTML", completed: false },
    { id: 2, content: "CSS", completed: true },
    { id: 3, content: "Javascript", completed: false }
  ]);
  const [value, setValue] = useState("");
  const [navState, setNavState] = useState("All");
  const navItems = [
    { id: 1, navVal: "All" },
    { id: 2, navVal: "Active" },
    { id: 3, navVal: "Completed" }
  ];

  const onChangeInput = e => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const addTodo = e => {
    const content = value.trim();
    if (e.keyCode !== 13 || content === "") return;
    setTodos(prevTodos => [
      ...prevTodos,
      { id: generateId(), content, completed: false }
    ]);
    setValue("");
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

  return (
    <div className="container">
      <h1 className="title">Todos</h1>
      <div className="ver">3.0</div>
      <InputBox onChangeInput={onChangeInput} addTodo={addTodo} value={value} />
      <Navigation
        changeNav={changeNav}
        navState={navState}
        navItems={navItems}
      />
      <TodoList
        checkedChange={checkedChange}
        removeTodo={removeTodo}
        todos={todos}
        navState={navState}
      />
      <Footer
        allComplete={allComplete}
        clearComplete={clearComplete}
        completedNumber={completedNumber}
        unCompletedNumber={unCompletedNumber}
      />
    </div>
  );
};

export default MainView;
