import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
      <Spinner animation="grow" />
      <span className="visually-hidden">Loading...</span>
  )
}

export default Loader;