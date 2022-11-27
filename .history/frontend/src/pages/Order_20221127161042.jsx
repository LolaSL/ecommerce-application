import React from 'react';
import Loader from '../components/Loader';
import Message from '../components/Message';

const Order = () => {
  return (
    <Loader ></Loader>
    ) : error ? (
      <Message variant="danger">{error}</Message>
    ) : (
}

export default Order;