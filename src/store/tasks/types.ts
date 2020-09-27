import { Task } from "../../domain/task";

export type TaskState = {
  currentTask: Task;
  isNew: boolean;
  tasks: Task[];
};

export interface Action {
  type: string;
  payload?: Task;
}
