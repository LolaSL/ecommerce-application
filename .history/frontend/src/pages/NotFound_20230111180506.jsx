import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <div className="not-found text-center display-6 pt-4">
      <Helmet>
        <title>Not Found</title>
      </Helmet>
          <Container className="middle-container">
              <div classname="display"> 404</div>
      <h2 className="text-danger  pt-4 mb-6">
        404 Page not found...
      </h2>
      <div className="mt-6 pt-4 ">
        <Link to="/shop">Go to Art Shop </Link>
              </div>
          </Container>
    </div>
  );
};
export default NotFound;
