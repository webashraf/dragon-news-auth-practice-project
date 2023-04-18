import moment from 'moment';
import React from 'react';
import Marquee from "react-fast-marquee";
import logo from '../../../assets/logo.png';
import { Container } from 'react-bootstrap';


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
        </Container>
    );
};

export default Header;