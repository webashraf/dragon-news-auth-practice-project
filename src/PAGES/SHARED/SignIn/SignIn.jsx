import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthContextProvider/AuthContextProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { useRef } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const SignIn = () => {
const {signInUser, user, auth} = useContext(AuthContext);
const [forgetEmail, setForgetEmail] = useState("");
const emailRef = useRef();
const [passwordView, setPasswordView] = useState(true);

const handleSignInUser = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setForgetEmail(email);

    signInUser(email, password);

}

const handleForgetPassword = () => {
  const email = emailRef.current.value;
  sendPasswordResetEmail(auth, email)
  .then(result => console.log(result))
  .catch(err => console.log(err))

}



  return (
    <Form onSubmit={handleSignInUser} className="w-50 mx-auto">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          ref={emailRef}
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
          type={passwordView ? "password" : "text"}
          name="password"
          required
          placeholder="Password"
        />
        <div onClick={()=> setPasswordView(!passwordView)}>
        {
          passwordView ? <BsEyeFill></BsEyeFill> : <BsEyeSlashFill></BsEyeSlashFill>
        }
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="secondary" size="lg" type="submit">
        Sign In
      </Button>
      <p onClick={handleForgetPassword} className="link-danger">Forget Password?</p>
      <p>Are you new ? <Link className="link-danger" to={"/signup"}>Register Now</Link>.</p>

    </Form>
  );
};

export default SignIn;
