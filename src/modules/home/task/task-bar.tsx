import React, {useEffect} from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
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

const TaskBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const enabled = useSelector((state: RootState) => state.tasks.isNew);

  const currentTask = useSelector((state: RootState) => {
    console.log("STATE", state);
    console.log("CURRENT: ", state.tasks.currentTask);
    return state.tasks.currentTask;
  });

  useEffect(() => {
    dispatch(getCurrentTask());
  }, [dispatch]);

  const addTask = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(addNewTask());
  };
  const updateTitle = (e: React.FormEvent<HTMLInputElement>) => {
    const newTask = {...currentTask};
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
            disabled={enabled}
        />
      ) : (
        <div />
      )}
    </SideBar>
  );
};

export default TaskBar;
