import { v4 as uuidv4 } from "uuid";
import { Task } from "./task";

export default class TaskService {
  getCurrentTask = (): Task => {
    const actual = localStorage.getItem("currentTask");
    if (this.currentNotExist(actual)) return this.newTask();
    return JSON.parse(<string>actual);
  };

  saveCurrent = (task: Task | undefined) =>
    localStorage.setItem("currentTask", JSON.stringify(task));

  createNewTask = (): Task => {
    return this.newTask();
  };

  isNew = (task: Task): boolean => {
    return task.title === "give a title!";
  };

  private currentNotExist(actual: string | null) {
    return actual == null;
  }

  private newTask = (): Task => ({
    id: uuidv4(),
    title: "give a title!",
    intervals: [],
  });
}
