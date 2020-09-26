import styled from "styled-components";
import {Link} from "react-router-dom";

export const Bar = styled.nav`
  grid-area: header;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  height: 4rem;
  background-color: #07090d;
`;

export const Action = styled.div`
  @media (max-width: 524px) {
    display: none;
  }
  margin-right: 2rem;

  background-color: #0f111a;
  color: #eeffe3;
  width: 5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #010102;
    color: #a51a0f;
  }
`;

export const Actions = styled.div`
  @media (max-width: 524px) {
    margin-left: 0;
    padding: 0;
  }
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

export const Icon = styled.div`
  color: #eeffe3;
  width: 5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: #a51a0f;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
