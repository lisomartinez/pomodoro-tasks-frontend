import {combineEpics, createEpicMiddleware} from "redux-observable";
import {Action, TaskState} from "./tasks/types";
import {createTask, getCurrentTaskFromLocalStorage, taskEpic,} from "./tasks/epics";

export const rootEpic = combineEpics(
    taskEpic,
    getCurrentTaskFromLocalStorage,
    createTask
);
export const epicMiddleware = createEpicMiddleware<Action, Action, TaskState>();
