import React, {useState} from "react";
import styled from "styled-components";
import Clock from "./clock/components";
import Input from "./setup/input";
import ButtonBar from "./setup/button-bar";
import {useAppDispatch} from "../../../store/app-dispatch";

const Container = styled.div`
  color: white;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 10fr 1fr;
  grid-template-rows: 4fr 10fr 3fr;
  grid-gap: 20px;
  align-items: center;
`;

const Icon = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 2;
  grid-column: 2;
`;

const Image = styled.img``;

const Form = styled.div`
  border: 2px solid whitesmoke;
  width: 100%;
  height: 70%;
  grid-row: 2;
  grid-column: 4;
`;

const Buttons = styled.div`
  border: 1px solid whitesmoke;
  width: 100%;
  height: 100%;
  grid-row: 3;
  grid-column: 4;
`;

const Main: React.FC = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(25);
  const [running, setRunning] = useState(false);
  const dispatch = useAppDispatch();

  const updateMinutes = (e: React.FormEvent<HTMLInputElement>) => {
    const newMinutes = parseInt(e.currentTarget.value, 10);
    setMinutes(newMinutes);
  };

  const updateSeconds = (e: React.FormEvent<HTMLInputElement>) => {
    const newSeconds = parseInt(e.currentTarget.value, 10);
    setSeconds(newSeconds);
  };

  const start = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("running");
    setRunning(true);
  };

  const stop = (e: React.MouseEvent<HTMLDivElement>) => {
    setRunning(false);
  };

  return (
      <Container>
        <Icon>
          <Clock running={running}/>
        </Icon>
        <Form>
          <Input
              seconds={seconds}
              minutes={minutes}
              onMinChange={(e) => updateMinutes(e)}
              onSecsChange={(e) => updateSeconds(e)}
          />{" "}
        </Form>
        <Buttons>
          <ButtonBar onStart={(e) => start(e)} onStop={(e) => stop(e)}/>
        </Buttons>
      </Container>
  );
};

export default Main;
