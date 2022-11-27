import React from 'react';
import Loader from '../components/Loader';
import Messagefrom '../components/MessageBox';

const Order = () => {
  return (
    <Loader ></Loader>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
}

export default Order;