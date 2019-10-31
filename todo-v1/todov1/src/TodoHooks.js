import React, { useState, useRef } from "react";

const TodoHooks = () => {
  const [todos, setTodos] = useState(
    [
      { id: 1, content: "HTML", completed: false },
      { id: 2, content: "CSS", completed: true },
      { id: 3, content: "Javascript", completed: false }
    ]
  );
  const [value, setValue] = useState('');
  const [navState, setNavState] = useState('All');
  const navItems = [{ id: 1, navVal: 'All' }, { id: 2, navVal: 'Active' }, { id: 3, navVal: 'Completed' }];
  
  const checkRef = useRef('');

  const onChangeInput = e => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const addTodo = e => {
    const content = value.trim();
    if (e.keyCode !== 13) return;
    setTodos( (prevTodos) => 
      [...prevTodos, {id: generateId(), content, completed: false}]
    );
    setValue('');
  };

  const generateId = () => {
    return !todos.length ? 1 : Math.max(...todos.map(todo => todo.id)) + 1;
  };

  const checkedChange = id => {
    setTodos( (prevTodos) => 
      prevTodos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    )
  };

  const removeTodo = id => {
      setTodos(todos.filter(todo => todo.id !== id));
  };

  const allComplete = () => {
    setTodos(
      todos.map(todo => {
        return { ...todo, completed: checkRef.current.checked };
      })
    )
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

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log(this.state.todos);
  //     console.log(nextState.todos);
  //     if (this.state.todos !== nextState.todos) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }

  const changeNav = (navId) => {
    if(navId === 1) {
      setNavState('All');
    } else if(navId === 2) {
      setNavState('Active');
    } else {
      setNavState('Completed');
    }
  }; 

  console.log(todos);

  return (
      <>
        <div className="container">
          <h1 className="title">Todos</h1>
          <div className="ver">1.0</div>

          <input
            className="input-todo"
            placeholder="What needs to be done?"
            onChange={onChangeInput}
            onKeyUp={addTodo}
            autoFocus
          />
          <ul className="nav">
            {navItems.map((navItem) => {
              return <li key={navItem.id} className={navState === navItem.navVal ? 'active':null} onClick={() => changeNav(navItem.id)}>{navItem.navVal}</li>
            })} 
          </ul>

          <ul className="todos">
            {todos.filter((todo) => {
              if(navState === 'Active') {return !todo.completed};
              if(navState === 'Completed') {return todo.completed};
              return true;
            }).map(todo => {
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
          <div className="footer">
            <div className="complete-all">
              <input
                className="custom-checkbox"
                type="checkbox"
                id="ck-complete-all"
                ref={checkRef}
                onChange={allComplete}
              />
              <label htmlFor="ck-complete-all">Mark all as complete</label>
            </div>
            <div className="clear-completed">
              <button className="btn" onClick={clearComplete}>
                Clear completed (
                <span className="completed-todos">
                  {completedNumber()}
                </span>
                )
              </button>
              <strong className="active-todos">
                {unCompletedNumber()}
              </strong>{" "}
              items left
            </div>
          </div>
        </div>
      </>
  )
}

export default TodoHooks;
