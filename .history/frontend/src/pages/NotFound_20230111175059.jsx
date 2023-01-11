import React from 'react';
import { Link} from "react-router-dom";

 const NotFound = () => {
  return (
    <div className="not-found text-center display-6 pt-4">
          <h2 className="text-danger text-uppercase pt-4 mb-6">404 Page not found...</h2>
          <span></span>
    <Link to="/shop">Go to Art Shop </Link>
      </div>
  )
}
export default NotFound;