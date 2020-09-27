import { combineReducers } from "@reduxjs/toolkit";
import TaskReducer from "./tasks/reducer";

const rootReducer = combineReducers({
  tasks: TaskReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
