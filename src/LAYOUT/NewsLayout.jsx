import React from "react";
import Header from "../PAGES/SHARED/Header/Header";
import Footer from "../PAGES/SHARED/Footer/Footer";
import RightNav from "../PAGES/SHARED/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>

      <Container>
        <Row>
          <Col lg={9}>
            <Outlet></Outlet>
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

export default NewsLayout;
