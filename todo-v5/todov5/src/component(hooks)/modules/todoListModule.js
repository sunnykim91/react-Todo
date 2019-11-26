const ONCHANGEINPUT = "todoListModule/ONCHANGEINPUT";
const ADDTODO = "todoListModule/ADDTODO";
const GENERATEID = "todoListModule/GENERATEID";
const CHECKEDCHANGE = "todoListModule/CHECKEDCHANGE";
const REMOVETODO = "todoListModule/REMOVETODO";
const ALLCOMPLETE = "todoListModule/ALLCOMPLETE";
const CLEARCOMPLETE = "todoListModule/CLEARCOMPLETE";
const COMPLETEDNUMBER = "todoListModule/COMPLETEDNUMBER";
const UNCOMPLETEDNUMBER = "todoListModule/UNCOMPLETEDNUMBER";
const CHANGENAV = "todoListModule/CHANGENAV";

export const onchangeinput = e => ({
  type: ONCHANGEINPUT,
  value: e.keyCode !== 13 || content === "" ? null : e.target.value
});
export const addtodo = value => ({
  type: ADDTODO,
  todos: {
    id: generateid(),
    content: value.trim(),
    completed: false
  }
});
const generateid = () => {
  return !todos.length ? 1 : Math.max(...todos.map(todo => todo.id)) + 1;
};
export const checkedchange = id => ({ type: CHECKEDCHANGE, id });
export const removetodo = () => ({ type: REMOVETODO, id });
export const allcomplete = () => ({ type: ALLCOMPLETE });
export const cleearcomplete = () => ({ type: CLEARCOMPLETE });
export const completednumber = () => ({ type: COMPLETEDNUMBER });
export const uncompletednumber = () => ({ type: UNCOMPLETEDNUMBER });
export const changenav = () => ({ type: CHANGENAV });

const initialState = {
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

function todoListModule(state = initialState, action) {
  switch (action.type) {
    case ONCHANGEINPUT:
      return {
        ...state,
        value: action.value
      };
    case ADDTODO:
      return {
        ...state,
        todos: state.todos.concat(action.todos)
      };
    case CHECKEDCHANGE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case REMOVETODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    case ALLCOMPLETE:
      return {};
    case CLEARCOMPLETE:
      return {};
    case COMPLETEDNUMBER:
      return {};
    case UNCOMPLETEDNUMBER:
      return {};
    case CHANGENAV:
      return {};
    default:
      return state;
  }
}
export default todoListModule;
