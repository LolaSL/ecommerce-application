import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
      <Spinner classNameanimation="grow">
          <span className="visually-hidden">Loading...</span>
          </Spinner>
  )
}

export default Loader;