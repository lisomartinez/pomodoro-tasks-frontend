import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
`;

type Props = {
  children: ReactNode;
};
const AccordionDetails: React.FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default AccordionDetails;
