import {Epic, ofType} from "redux-observable";

import {Observable} from "rxjs";
import {filter, map, tap} from "rxjs/operators";
import {isOfType} from "typesafe-actions";
import {Action, SimpleAction, TaskState} from "./types";
import {Task} from "../../domain/task";
import {addNewTask, getCurrentTask, loadCurrentTask, taskCreated, updatedTask, updateTask,} from "./actions";
import TaskService from "../../domain/task-service";

const taskService = new TaskService();

const taskEpic: Epic<SimpleAction, SimpleAction, TaskState> = (action$) =>
    action$.pipe(
        filter(isOfType(updateTask.type)),
        tap({
            next: (task) => taskService.saveCurrent(task.payload),
        }),
        map((task) => ({
            type: updatedTask.type,
            payload: task.payload,
        }))
    );

const getCurrentTaskFromLocalStorage: Epic<Action, Action, TaskState> = (
    action$: Observable<Action>
) =>
  action$.pipe(
    ofType(getCurrentTask.type),
    map(() => taskService.getCurrentTask()),
    map((value: Task) => {
        if (taskService.isPlaceholder(value)) {
            return {
                type: loadCurrentTask.type,
                payload: {task: value, status: false},
            };
        }
        return {
            type: loadCurrentTask.type,
            payload: {task: value, status: true},
        };
    })
  );

const createTask: Epic<Action, Action, TaskState> = (action$) =>
  action$.pipe(
      ofType(addNewTask.type),
      map(() => taskService.createNewTask()),
      map((value: Task) => ({
          type: taskCreated.type,
          payload: {task: value, status: true},
      }))
  );

export { taskEpic, getCurrentTaskFromLocalStorage, createTask };
