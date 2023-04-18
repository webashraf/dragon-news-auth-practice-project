import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from '../Q-zone/Qzone';

const RightNav = () => {
    return (
        <div>
            <h1>Right Nav</h1>
            <Button className='mb-2' variant="outline-primary" size="lg">  <FaGoogle /> Log in with google</Button>
            <Button variant="outline-secondary" size="lg"><FaGithub /> Log in with github</Button>
            <div className='py-4'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook </ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram>  Inistagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='p-3 bg-secondary bg-opacity-25 rounded-2 '>
                <h3>Q-Zone</h3>
                <Qzone></Qzone>
            </div>
        </div>
    );
};

export default RightNav;