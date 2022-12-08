import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Store } from '../Store';

const Protected = () => {

    const { state } = useContext(Store);
  const { userInfo } = state;
  return (
    <div>
      
    </div>
  )
}

export default Protected;
