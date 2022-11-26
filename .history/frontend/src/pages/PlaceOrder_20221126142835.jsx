import React from 'react';
import CheckoutActions from '../components/CheckoutActions';
import { Helmet } from "react-helmet-async";

const PlaceOrder = () => {
  return (
    <div>
      <CheckoutActions step1 step2 step3 step4></CheckoutActions>
          <Helmet>
              
    </Helmet>
      
      </div>
  )
}

export default PlaceOrder;

