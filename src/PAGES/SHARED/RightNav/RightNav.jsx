import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <h1>Right Nav</h1>
            <Button className='mb-2' variant="outline-dark" size="lg">  <FaGoogle /> Log in with google</Button>
            <Button variant="outline-secondary" size="lg"><FaGithub /> Log in with github</Button>
        </div>
    );
};

export default RightNav;