import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <Form className="w-50 mx-auto">
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="secondary" size="lg" type="submit">
        Sign In
      </Button>
      <p>Are you new ? <Link className="link-danger" to={"/signup"}>Register Now</Link>.</p>

    </Form>
  );
};

export default SignIn;
