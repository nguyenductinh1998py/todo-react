import { combineReducers } from "@reduxjs/toolkit";
import todos from './todos'
import visibilityFilter from "./visibilityFilter";

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp