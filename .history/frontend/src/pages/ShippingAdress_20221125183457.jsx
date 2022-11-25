import React from 'react';
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';


const ShippingAdress = () => {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
      fullBox,
      userInfo,
      cart: { shippingAddress },
    } = state;
  return (
    <div>
          <Helmet>
              <title>Shipping Address</title>
          </Helmet>
          <h1 className="my-3">Shipping Address</h1>
          <Form onSubmit={submitHandler}>
              
</Form>
    </div>
  )
}

export default ShippingAdress
