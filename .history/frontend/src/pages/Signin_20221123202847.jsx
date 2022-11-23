import React from 'react';
import Container from 'react-bootstrap/Container';
import { Helmet } from "react-helmet-async";

const Signin = () => {
  return (
      <Container>
          <Helmet>
              <title>Sign In</title>
          </Helmet>
          <h1 className="my-3">Sign In</h1>
          <Form></Form>
   </Container>
  )
}

export default Signin;