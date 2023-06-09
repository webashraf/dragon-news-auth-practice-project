import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../PAGES/SHARED/Footer/Footer";
import Header from "../PAGES/SHARED/Header/Header";
import LeftNav from "../PAGES/SHARED/LeftNav/LeftNav";
import RightNav from "../PAGES/SHARED/RightNav/RightNav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>

      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
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

export default MainLayout;
