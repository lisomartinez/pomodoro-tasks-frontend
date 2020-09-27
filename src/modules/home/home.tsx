import React from "react";
import styled from "styled-components";
import TaskBar from "./task/task-bar";
import Main from "./main";

const Container = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 4fr 1fr;
  grid-template-areas: "main bar";
  height: 100%;
`;

const Content = styled.div`
  //width: 100%;
  height: 100%;
  grid-area: main;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Main />
      </Content>
      <TaskBar />
    </Container>
  );
};

export default Home;
