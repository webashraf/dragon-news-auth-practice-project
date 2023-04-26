import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthContextProvider/AuthContextProvider";
import { sendEmailVerification } from "firebase/auth";

const RegisterUser = () => {

  const {createUserEmailPassowrd, auth} = useContext(AuthContext);

    const handleRegister= e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirm.value;
        const checked = form.checked.value;
        console.log(email, password, confirmPass, checked);

        
        if (password === confirmPass) {
          createUserEmailPassowrd(email, password)
          .then(result => {
            console.log(result.user);
            sendEmailVerification(result.user)
            .then(result => console.log(result))
            .catch(err => console.log(err))
          })
          .catch(err => {
            console.log(err);
          })
        }
        
      }







  return (
    <Form onSubmit={handleRegister} className="w-50 mx-auto">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          required
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          required
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="confirm"
          required
          placeholder="Confirm Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name="checked" required label="Check me out" />
      </Form.Group>
      <Button variant="secondary" size="lg" type="submit">
        Sign Up
      </Button>
      <p>All ready have an account ? <Link className="link-danger" to={"/login"}>Log In</Link> Now.</p>
    </Form>
  );
};

export default RegisterUser;
