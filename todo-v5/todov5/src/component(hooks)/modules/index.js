import { combineReducers } from "redux";
import todoListModule from "./todoListModule";

const rootReducer = combineReducers({ todoListModule });

export default rootReducer;
