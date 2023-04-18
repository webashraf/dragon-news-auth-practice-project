import moment from 'moment';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Marquee from "react-fast-marquee";
import logo from '../../../assets/logo.png';



const Header = () => {
    return (
        <Container className='py-5'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format('dddd, MMMM D, YYYY')}</p>
                <div className='d-flex'>
                    <button className='btn btn-danger'>Latest</button>
                    <Marquee speed={100} pauseOnHover={true}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore recusandae ipsum similique praesentium! Explicabo error atque ab temporibus, beatae voluptatum!</Marquee>
                </div>
            </div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="#features">Home</Nav.Link>
                                <Nav.Link href="#pricing">About</Nav.Link>
                                <Nav.Link href="#pricing">Carear</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">More deets</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                <Button variant="secondary">Log In</Button>                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;