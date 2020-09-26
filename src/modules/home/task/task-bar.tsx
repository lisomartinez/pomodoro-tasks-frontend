import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {v4 as uuidv4} from "uuid";
import {useSelector} from "react-redux";

import {Task} from "../../../domain/task";
import TaskComponent from "./task";
import {RootState} from "../../../store/root-reducer";
import {addNewTask, getCurrentTask, updateTask,} from "../../../store/tasks/actions";
import {useAppDispatch} from "../../../store/app-dispatch";

const SideBar = styled.div`
  grid-area: bar;
  background-color: #07090d;
  font-size: 1.2rem;
`;

const Label = styled.div`
  color: white;
  font-size: 1.2rem;
`;

const createNewTask = (): Task => {
  return {
    id: uuidv4(),
    title: "",
    intervals: [],
  };
};

const TaskBar: React.FC = () => {
  const dispatch = useAppDispatch();

  const currentTask = useSelector((state: RootState) => {
    console.log("STATE", state);
    console.log("CURRENT: ", state.tasks.currentTask);
    return state.tasks.currentTask;
  });

  const [task, setTask] = useState<Task>({
    id: "",
    title: "",
    intervals: [],
  });

  useEffect(() => {
    dispatch(getCurrentTask());
  }, [dispatch]);

  const addTask = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(addNewTask());
  };
  const updateTitle = (e: React.FormEvent<HTMLInputElement>) => {
    const newTask = {...task};
    newTask.title = e.currentTarget.value;
    dispatch(updateTask(newTask));
  };
  return (
      <SideBar>
        {currentTask !== undefined ? (
            <TaskComponent
                task={currentTask}
                onNew={(e) => addTask(e)}
                onTitleUpdate={(e) => updateTitle(e)}
            />
        ) : (
            <div/>
        )}
      </SideBar>
  );
};

export default TaskBar;
