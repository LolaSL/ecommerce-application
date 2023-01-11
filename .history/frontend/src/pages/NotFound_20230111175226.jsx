import React from 'react';
import { Link} from "react-router-dom";

 const NotFound = () => {
  return (
    <div className="not-found text-center display-6 pt-4">
          <h2 className="text-danger text-uppercase pt-4 mb-6">404 Page not found...</h2>
          <span className="mt-6 text-uppercase">
              <Link to="/shop">Go to Art Shop </Link>
          </span>
      </div>
  )
}
export default NotFound;