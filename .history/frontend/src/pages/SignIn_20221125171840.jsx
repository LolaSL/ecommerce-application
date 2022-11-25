import React from 'react';
import Container from 'react-bootstrap/Container';
import { Helmet } from "react-helmet-async";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';

const SignIn = () => {
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';
  return (
      <Container className ="form-container">
          <Helmet>
              <title>Sign In</title>
          </Helmet>
          <h1 className="my-3 text-center">Sign In</h1>
          <Form onSubmit={sub}>
          <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            autoComplete="off"
            // onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            autoComplete="current-password"
            // onChange={(e) => setPassword(e.target.value)}
          />
              </Form.Group>
              <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          New customer?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
          </Form>
   </Container>
  )
}

export default SignIn;