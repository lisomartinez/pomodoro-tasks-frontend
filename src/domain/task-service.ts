import {v4 as uuidv4} from "uuid";
import {Task} from "./task";

export default class TaskService {
  getCurrentTask = (): Task => {
    const actual = localStorage.getItem("currentTask");
    if (this.currentNotExist(actual)) return this.newPlaceHolderTask();
    return JSON.parse(<string>actual);
  };

  saveCurrent = (task: Task | undefined): void =>
      localStorage.setItem("currentTask", JSON.stringify(task));

  createNewTask = (): Task => {
    const newTask = this.newTask();
    this.saveCurrent(newTask);
    return newTask;
  };

  isPlaceholder = (task: Task): boolean => {
    const placeHolder = this.newPlaceHolderTask();
    return task.id === placeHolder.id && task.title === placeHolder.title;
  };

  private currentNotExist(actual: string | null) {
    return actual == null;
  }

  private newTask = (): Task => ({
    id: uuidv4(),
    title: "Give me a title!",
    intervals: [],
    saved: false,
  });

  private newPlaceHolderTask = () => ({
    id: "edbc0aa2-2d67-46aa-b80d-87fe27371fb3",
    title: "Press NEW to create a task",
    intervals: [],
    saved: false,
  });
}
