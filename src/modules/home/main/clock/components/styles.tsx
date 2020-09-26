import styled from "styled-components";

/*
 *  Based on: https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/
 * */
export const BaseTimer = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
`;

export const Circle = styled.g`
  fill: none;
  stroke: none;
`;

export const Elapsed = styled.circle`
  stroke-width: 7px;
  stroke: grey;
`;

export const TimerLabel = styled.span`
  position: absolute;
  width: 300px;
  height: 300px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
`;

export const PathRemaining = styled.path<{ colorPath: string }>`
  stroke-width: 7px;
  stroke-linecap: round;
  transform: rotate(90deg);
  transform-origin: center;
  transition: 1s linear all;
  stroke: ${(props) => props.colorPath};
`;

export const Svg = styled.svg`
  transform: scaleX(-1);
`;
