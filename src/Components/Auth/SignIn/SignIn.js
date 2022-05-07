import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import "./SignIn.css";
import Google from "../GoogleLogin/Google";

const SignIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorMessage;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorMessage = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const navigateRegister = (e) => {
    navigate("/signup");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Please check your email");
    } else {
      toast("Please enter your email");
    }
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="container w-50 mx-auto mt-4 mb-5">
      <h2 className=" text-center">Please Log In</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
          Log In
        </Button>
      </Form>
      {errorMessage}
      <p className="text-1">
        Create a
        <Link to="/signup" className="m-2 " onClick={navigateRegister}>
          New account
        </Link>
      </p>
      <p className="text-1">
        Forget password!!
        <Button className=" m-2 btn btn primary" onClick={resetPassword}>
          Reset Password
        </Button>
      </p>
      <Google></Google>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
