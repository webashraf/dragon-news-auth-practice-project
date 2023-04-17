import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../PAGES/SHARED/Footer/Footer";
import Header from "../PAGES/SHARED/Header/Header";
import LeftNav from "../PAGES/SHARED/LeftNav/LeftNav";
import RightNav from "../PAGES/SHARED/RightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header></Header>

      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <h1> Main content is comming soon</h1>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Main;
