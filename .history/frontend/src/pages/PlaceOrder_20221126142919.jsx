import React from 'react';
import CheckoutActions from '../components/CheckoutActions';
import { Helmet } from "react-helmet-async";

const PlaceOrder = () => {
  return (
    <div>
      <CheckoutActions step1 step2 step3 step4></CheckoutActions>
          <Helmet>
              <title>Preview Order</title>
          </Helmet>
          <h1 className="pt">Preview Order</h1>
      
      </div>
  )
}

export default PlaceOrder;

