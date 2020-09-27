import React, { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const Container = styled.div`
  background-color: #010102;
  height: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled.div`
  margin-left: 1rem;
`;

const Summary: React.FC<Props> = ({ children }: Props) => {
  return (
    <Container>
      <Item>{children}</Item>
    </Container>
  );
};

export default Summary;
