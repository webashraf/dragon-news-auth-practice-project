import React from "react";
import { Container } from "react-bootstrap";
import Header from "../PAGES/SHARED/Header/Header";
import SignIn from "../PAGES/SHARED/SignIn/SignIn";

const LoginLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <SignIn></SignIn>
      </Container>
    </div>
  );
};

export default LoginLayout;
