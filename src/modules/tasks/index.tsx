import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Task } from "../../domain/task";
import { useAppDispatch } from "../../store/app-dispatch";
import { RootState } from "../../store/root-reducer";
import Accordion from "../../components/accordion";
import AccordionDetails from "../../components/details";
import AccordionSummary from "../../components/summary";

const Container = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  color: whitesmoke;
  padding-top: 2rem;
`;

const Lines = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LineContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 4fr 1fr 1fr;
`;

const Line = styled.div`
  border: 1px solid white;
  grid-column: 3/3;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const Intervals = styled.div`
  padding: 0.25em;
`;

const Interval = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

const From = styled.div`
  margin-left: 0.5em;
`;

const Arrow = styled.div`
  margin-left: 1em;
  margin-right: 1em;
`;
const To = styled.div``;

const Order = styled.div`
  font-weight: bold;
`;

const createLines = (tasks: Task[]) => {
  return tasks.map((task) => (
    <LineContainer key={task.id}>
      <Line>
        <Accordion>
          {{
            summary: <AccordionSummary>{task.title}</AccordionSummary>,
            details: (
              <AccordionDetails>
                <Intervals>
                  {task.intervals.map((interval, index) => (
                    <Interval key={interval.id}>
                      <Order>{index + 1}.</Order>
                      <From>Started at: {interval.start}</From>
                      <Arrow>-&gt;</Arrow>
                      <To>Ended at: {interval.end}</To>
                    </Interval>
                  ))}
                </Intervals>
              </AccordionDetails>
            ),
          }}
        </Accordion>
      </Line>
    </LineContainer>
  ));
};
const Tasks: React.FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <Container>
      <Lines>{createLines(tasks)}</Lines>
    </Container>
  );
};

export default Tasks;
