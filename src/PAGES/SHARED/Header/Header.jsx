import moment from "moment";
import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import AuthContextProvider, {
  AuthContext,
} from "../../../AuthContextProvider/AuthContextProvider";

const Header = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  // console.log(user);


  const handleSignOutBtn = () =>{
    handleSignOut()
  }





  return (
    <Container className="py-5">
      <div className="text-center">
        <img src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        <div className="d-flex">
          <button className="btn btn-danger">Latest</button>
          <Marquee speed={100} pauseOnHover={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            recusandae ipsum similique praesentium! Explicabo error atque ab
            temporibus, beatae voluptatum!
          </Marquee>
        </div>
      </div>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto d-flex gap-3">
                <Link className="text-dark" to={"/"}>
                  Home
                </Link>
                <Link className="text-dark" to={"/about"}>
                  About
                </Link>
                <Link className="text-dark" to={"/news"}>
                  News
                </Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">{user?.email}</Nav.Link>
                {user ? 
                  <Button onClick={handleSignOutBtn} variant="secondary">Sign Out</Button>
                 : 
                  <Link to={"/login"}>
                    <Button variant="secondary">Sign In</Button>
                  </Link>
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;
