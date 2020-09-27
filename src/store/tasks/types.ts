import {Task} from "../../domain/task";

export type TaskState = {
  currentTask: Task;
  isNew: boolean;
  tasks: Task[];
};

export interface SimplePayload {
  task: Task;
}

export interface ComposedPayload {
  task: Task;
  status: boolean;
}

export type ComposedAction = {
  type: string;
  payload: ComposedPayload;
};
export type SimpleAction = {
  type: string;
  payload: Task;
};

export type Action = SimpleAction | ComposedAction;
