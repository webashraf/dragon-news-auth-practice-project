import React, { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { AuthContext } from '../../../AuthContextProvider/AuthContextProvider';
import Qzone from '../Q-zone/Qzone';

const RightNav = () => {
    const {signInWithGoogle, user} = useContext(AuthContext);



    return (
        <div>
            <h1>Right Nav</h1>
            {
            !user && <Button onClick={signInWithGoogle} className='mb-2' variant="outline-primary" size="lg">  <FaGoogle /> Log in with google</Button>
            }
            {
            !user && <Button variant="outline-secondary" size="lg"><FaGithub /> Log in with github</Button>
            }
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