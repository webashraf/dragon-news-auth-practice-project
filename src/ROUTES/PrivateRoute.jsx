import React, { useContext } from 'react';
import { AuthContext } from '../AuthContextProvider/AuthContextProvider';
import { Navigate } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
const {user, loading} = useContext(AuthContext);


if(loading){
   return (  <>
    <Button variant="primary" disabled>
      <span className="visually-hidden">Loading...</span>
    </Button>{' '}
    <Button variant="primary" disabled>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Loading...
    </Button>
  </>)
};

 return user ? children : <Navigate to="/login"></Navigate>;

};

export default PrivateRoute;