import styled from "styled-components";

export const Container = styled.div`
  //display: flex;
  //flex-direction: column;
  background-color: #0f111a;
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr 15fr 1fr;
  grid-template-areas:
    "header"
    "content"
    "footer";
  color: #a51a0f;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.main`
  background-color: #0f111a;

  grid-area: content;
`;
