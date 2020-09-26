import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 2rem;
  width: 100%;
  height: 100%;
`;

const TextBox = styled.input`
  width: 3em;
  font-size: 1em;
  background-color: navy;
  color: whitesmoke;
`;

type Props = {
    minutes: number;
    seconds: number;
    onMinChange: React.FormEventHandler<HTMLInputElement>;
    onSecsChange: React.FormEventHandler<HTMLInputElement>;
};

const Input: React.FC<Props> = (props: Props) => {
    const {minutes, seconds, onMinChange, onSecsChange} = props;
    return (
        <Container>
            <TextBox
                type="number"
                min="0"
                max="59"
                step="1"
                value={minutes}
                onChange={onMinChange}
            />
            <span>:</span>
            <TextBox
                type="number"
                min="0"
                max="59"
                step="1"
                value={seconds}
                onChange={onSecsChange}
            />
        </Container>
    );
};

export default Input;
