import { createAction } from "@reduxjs/toolkit";
import { Task } from "../../domain/task";
import { sliceActions } from "./reducer";

const updateTask = createAction<Task>("UPDATE");

const getCurrentTask = createAction("GET_CURRENT_TASK");

const addNewTask = createAction("ADD_NEW_TASK");

const { updatedTask, loadCurrentTask, taskCreated } = sliceActions;

export {
  updateTask,
  getCurrentTask,
  addNewTask,
  updatedTask,
  loadCurrentTask,
  taskCreated,
};
