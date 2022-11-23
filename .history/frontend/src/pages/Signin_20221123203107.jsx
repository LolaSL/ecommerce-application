import React from 'react';
import Container from 'react-bootstrap/Container';
import { Helmet } from "react-helmet-async";
import Form from 'react-bootstrap/Form';
import Form from 'react-bootstrap/Form';

const Signin = () => {
  return (
      <Container>
          <Helmet>
              <title>Sign In</title>
          </Helmet>
          <h1 className="my-3">Sign In</h1>
          <Form>
          <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
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

export default Signin;