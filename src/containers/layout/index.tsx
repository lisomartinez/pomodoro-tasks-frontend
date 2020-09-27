import React, { ReactNode } from "react";
import Nav from "./nav";
import Footer from "./footer";
import { Container, Content } from "./styles";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props;

  return (
    <Container>
      <Nav />
      <Content> {children}</Content>
      <Footer />
    </Container>
  );
};

export default Layout;
