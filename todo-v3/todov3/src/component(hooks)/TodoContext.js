import React, { createContext } from "react";

const TodoContext = createContext({
  state: {},
  actions: {}
});

const TodoProvider = ({}) => {};

const { Consumer: TodoConsumer } = TodoContext;

export { TodoProvider, TodoConsumer };
