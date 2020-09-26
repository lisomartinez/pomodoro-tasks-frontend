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

const Button = styled.div`
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

  &:hover {
    color: darkred;
    background-color: #07090d;
  }
`;

type Props = {
    onStart: React.MouseEventHandler<HTMLDivElement>;
    onStop: React.MouseEventHandler<HTMLDivElement>;
};

const ButtonBar: React.FC<Props> = (props: Props) => {
    const {onStart, onStop} = props;
    return (
        <Container>
            <Button onClick={onStart}>START</Button>
            <Button onClick={onStop}>STOP</Button>
            <Button>PAUSE</Button>
        </Container>
    );
};

export default ButtonBar;
