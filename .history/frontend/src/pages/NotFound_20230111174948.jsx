import React from 'react';

 const NotFound = () => {
  return (
    <div className="not-found text-center display-6 pt-4">
    <h2 className="text-danger text-uppercase pt-4 mb-6">404 Page not found...</h2>
    <Link to="/">Go to Home </Link>
      </div>
  )
}
export default NotFound;