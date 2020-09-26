import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Task} from "../../domain/task";
import {TaskState} from "./types";

const taskService: TaskService = new TaskService();
const initialState: TaskState = {
  currentTask: {
    id: "86031f87-85c2-4fba-b616-8bddd83d0402",
    title: "new title",
    intervals: [],
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
    },
    {
      id: "9f9ee7ff-6fd5-471f-a530-9447c9dc14be",
      title: "second task",
      intervals: [],
    },

    {
      id: "25b0e8e7-1b07-4eb0-9a38-4d44efd19978",
      title: "third task",
      intervals: [],
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
      // state.currentTask =
      //   state.currentTask.id === action.payload.id
      //     ? action.payload
      //     : state.currentTask;
      state.currentTask = action.payload;
    },
    loadCurrentTask(state, action: PayloadAction<Task>) {
      state.currentTask = action.payload;
      if (
          state.tasks.find((task) => task.id === action.payload.id) !== undefined
      ) {
        state.isNew = false;
      } else {
        state.isNew = false;
        if (action.payload != isNewTask())
          state.tasks = [...state.tasks, action.payload];
      }
      console.log("loaded", state.currentTask);
    },
    taskCreated(state, action: PayloadAction<Task>) {
      state.currentTask = action.payload;
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

export const sliceActions = taskSlice.actions;
export default taskSlice.reducer;
