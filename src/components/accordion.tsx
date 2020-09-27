import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { useMeasure } from "react-use";

type Props = {
  children: {
    summary: ReactNode;
    details: ReactNode;
  };
};

const Transition = styled.div``;

const Container = styled.div`
  overflow: hidden;
`;

const haveTwoChildren = (children: ReactElement[]) =>
  children !== null && React.Children.count(children) === 2;

const Accordion: React.FC<Props> = ({ children }: Props) => {
  // const [toggle, setToggle] = useState(false);
  const defaultHeight = "0px";

  // Manages the open or cloased state of the accordion
  const [open, toggle] = useState(false);

  // The height of the content inside of the accordion
  const [contentHeight, setContentHeight] = useState(defaultHeight);

  // Gets the height of the element (ref)
  const [ref, { height }] = useMeasure<HTMLDivElement>();

  // Animations
  const expand = useSpring({
    // config: { friction: 1000 },
    height: open ? `${contentHeight}px` : defaultHeight,
  });

  useEffect(() => {
    // Sets initial height
    setContentHeight(height.toString());

    // Adds resize event listener
    window.addEventListener("resize", () =>
      setContentHeight(height.toString())
    );

    // Clean-up
    return window.removeEventListener("resize", () =>
      setContentHeight(height.toString())
    );
  }, [height]);

  const showDetails = () => {
    toggle((actual) => !actual);
  };

  return (
    <Container>
      <div onClick={showDetails}>{children.summary}</div>
      <animated.div style={expand}>
        <div ref={ref}>{children.details}</div>
      </animated.div>
    </Container>
  );
};

export default Accordion;
