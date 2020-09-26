import {Epic, ofType} from "redux-observable";

import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {Action, TaskState} from "./types";
import {Task} from "../../domain/task";
import {addNewTask, getCurrentTask, loadCurrentTask, taskCreated, updatedTask, updateTask,} from "./actions";
import TaskService from "../../domain/task-service";

const taskService = new TaskService();

const taskEpic: Epic<Action, Action, TaskState> = (
    action$: Observable<Action>
) =>
    action$.pipe(
        ofType(updateTask.type),
        tap({
            next: (value) => taskService.saveCurrent(value.payload),
        }),
        map((value) => ({type: updatedTask.type, payload: value.payload}))
    );

const getCurrentTaskFromLocalStorage: Epic<Action, Action, TaskState> = (
    action$
) =>
    action$.pipe(
        ofType(getCurrentTask.type),
        map(() => taskService.getCurrentTask()),
        map((value: Task) => {
            return {
                type: loadCurrentTask.type,
                payload: value,
            };
        })
    );

const createTask: Epic<Action, Action, TaskState> = (action$) =>
    action$.pipe(
        ofType(addNewTask.type),
        map(() => taskService.createNewTask()),
        map((value: Task) => ({type: taskCreated.type, payload: value}))
    );

export {taskEpic, getCurrentTaskFromLocalStorage, createTask};
