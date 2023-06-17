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
      
      <Container className="small-container">
        <div className="display-1 fw-bold text-danger mb-6"> 404</div>
        
        <div className="mt-6 pt-4 font-italic">
          <Link className="mt-6 pt-4 font-italic" to="/shop">
            Go to Art Shop{" "}
          </Link>
        </div>
      </Container>
    </div>
  );
};
export default NotFound;
