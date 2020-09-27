import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Task} from "../../domain/task";
import {ComposedPayload, TaskState} from "./types";
import TaskService from "../../domain/task-service";

const taskService: TaskService = new TaskService();

const initialState: TaskState = {
  currentTask: {
    id: "",
    title: "",
    intervals: [],
    saved: false,
  },
  isNew: true,
  tasks: [
    {
      id: "86031f87-85c2-4fba-b616-8bddd83d0402",
      title: "first tasks",
      intervals: [
        {
          id: "3c54740b-d69a-4e22-9523-fc3bc21d0967",
          start: new Date().toLocaleTimeString(),
          end: new Date().toLocaleTimeString(),
        },
      ],
      saved: true,
    },
    {
      id: "9f9ee7ff-6fd5-471f-a530-9447c9dc14be",
      title: "second task",
      intervals: [],
      saved: true,
    },

    {
      id: "25b0e8e7-1b07-4eb0-9a38-4d44efd19978",
      title: "third task",
      intervals: [],
      saved: true,
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    updatedTask(state, action: PayloadAction<Task>) {
      state.tasks = state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
      );
      state.currentTask = action.payload;
    },
    loadCurrentTask(state, action: PayloadAction<ComposedPayload>) {
      state.currentTask = action.payload.task;
      if (action.payload.task.saved) {
        state.isNew = false;
      }
    },
    taskCreated(state, action: PayloadAction<ComposedPayload>) {
      state.currentTask = action.payload.task;
      state.isNew = false;
      state.tasks = [...state.tasks, action.payload.task];
    },
  },
});

export const sliceActions = taskSlice.actions;
export default taskSlice.reducer;
