import React from 'react';
import { Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet-async";

 const NotFound = () => {
     return (
        <Helmet>
        <title>{product.name}</title>
      </Helmet>
    <div className="not-found text-center display-6 pt-4">
          <h2 className="text-danger text-uppercase pt-4 mb-6">404 Page not found...</h2>
          <div className="mt-6 pt-4 text-uppercase">
              <Link to="/shop">Go to Art Shop </Link>
          </div>
      </div>
  )
}
export default NotFound;