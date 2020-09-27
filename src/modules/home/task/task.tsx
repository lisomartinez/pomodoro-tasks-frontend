import React from "react";
import styled from "styled-components";
import {Task} from "../../../domain/task";
import {Interval} from "../../../domain/interval";
import IntervalComponent from "./interval";

const Container = styled.section`
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 20px 10px 10px;
  height: 2rem;
`;

const Intervals = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  font-size: 0.9em;
`;

const TitleText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-right: 1rem;
  width: 100%;
`;
const TitleInput = styled.input.attrs({ type: "text" })`
  appearance: none;
  border: none;
  outline: none;
  background-color: #272c43;
  color: whitesmoke;
  height: 100%;
  width: 100%;
  margin-left: 0.5rem;
  font-size: 1rem;
  padding-top: 5px;

  box-sizing: border-box;
`;
const TitleButton = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 3rem;
  height: 100%;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: red;
  border-radius: 20px;

  &:hover {
    font-weight: bolder;
    background-color: darkred;
  }
`;

const IntervalElement = styled.div``;
type Props = {
    task: Task;
    onNew: React.MouseEventHandler<HTMLDivElement>;
    onTitleUpdate: React.FormEventHandler<HTMLInputElement>;
    disabled: boolean;
};

const TaskComponent: React.FC<Props> = (props: Props) => {
    const {task, onNew, onTitleUpdate, disabled} = props;
  return (
    <Container>
      <Title>
          <TitleText>
              <div>Doing:</div>
              <TitleInput
                  value={task.title}
                  onChange={onTitleUpdate}
                  disabled={disabled}
              />
          </TitleText>
          <TitleButton onClick={onNew}>NEW</TitleButton>{" "}
      </Title>
      <Intervals>
        Intervals:
        {task.intervals.map((interval: Interval, index: number) => (
          <IntervalComponent
            index={index + 1}
            key={interval.id}
            interval={interval}
          />
        ))}
      </Intervals>
    </Container>
  );
};

export default TaskComponent;
