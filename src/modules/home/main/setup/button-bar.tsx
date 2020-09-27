import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  font-size: 1.6rem;
  width: 100%;
  height: 100%;
`;

type ButtonsProps = {
    disabled: boolean;
};

const Button = styled.div<ButtonsProps>`
  cursor: pointer;
  border: 1px solid whitesmoke;
  width: 150px;
  height: 50px;
  border-radius: 15px 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: ${(props) => (props.disabled ? "black" : "inherit")};
  &:hover {
    color: ${(props) => (props.disabled ? "inherit" : "darkred")};
    background-color: ${(props) => (props.disabled ? "black" : "#07090d")};
  }
`;

type Props = {
    onStart: React.MouseEventHandler<HTMLDivElement>;
    onStop: React.MouseEventHandler<HTMLDivElement>;
    enabled: boolean;
};

const ButtonBar: React.FC<Props> = ({onStart, onStop, enabled}: Props) => {
    return (
        <Container>
            <Button onClick={onStart} disabled={enabled}>
                START
            </Button>
            <Button onClick={onStop} disabled={enabled}>
                STOP
            </Button>
            <Button disabled={enabled}>PAUSE</Button>
        </Container>
  );
};

export default ButtonBar;
