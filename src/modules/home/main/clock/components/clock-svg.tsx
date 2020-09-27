import React from "react";
import {
  BaseTimer,
  Circle,
  Elapsed,
  PathRemaining,
  Svg,
  TimerLabel,
} from "./styles";

type Props = {
  color: string;
  path: string;
  time: string;
};

const ClockSvg: React.FC<Props> = (props: Props) => {
  const { color, path, time } = props;
  return (
    <BaseTimer>
      <Svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <Circle>
          <Elapsed cx="50" cy="50" r="45" />
          <PathRemaining
            colorPath={color}
            strokeDasharray={path}
            d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
          />
        </Circle>
      </Svg>
      <TimerLabel>{time}</TimerLabel>
    </BaseTimer>
  );
};

export default ClockSvg;
