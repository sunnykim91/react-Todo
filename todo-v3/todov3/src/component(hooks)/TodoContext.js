import React, { createContext, useState } from "react";

const TodoContext = createContext({
  state: { color: "black" },
  actions: {
    setColor: () => {}
  }
});

const TodoProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const value = {
    state: { color },
    actions: { setColor }
  };
};

const { Consumer: TodoConsumer } = TodoContext;

export { TodoProvider, TodoConsumer };
