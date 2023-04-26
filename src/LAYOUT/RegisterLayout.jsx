import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../PAGES/SHARED/Header/Header';
import RegisterUser from '../PAGES/SHARED/RegisterUser/RegisterUser';

const RegisterLayout = () => {
    return (
        <div>
        <Header></Header>
        <Container>
          <RegisterUser></RegisterUser>
        </Container>
      </div>
    );
};

export default RegisterLayout;