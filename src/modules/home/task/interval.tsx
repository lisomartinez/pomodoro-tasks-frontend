import React from "react";
import styled from "styled-components";
import { Interval } from "../../../domain/interval";

const Container = styled.div`
  font-size: 0.8em;
`;

type Props = {
  key: string;
  index: number;
  interval: Interval;
};

const extractTime = (date: string): string => {
  const time = date.split(" ")[0];
  return time.substr(0, time.lastIndexOf(":"));
};

const IntervalComponent: React.FC<Props> = (props: Props) => {
  const { interval, index } = props;
  const startTime = extractTime(interval.start);
  const endTime = extractTime(interval.end);

  return (
    <Container>
      {index.toString()}: {startTime} -&gt; {endTime}
    </Container>
  );
};

export default IntervalComponent;
