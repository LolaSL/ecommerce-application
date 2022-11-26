import React from 'react';
import CheckoutActions from '../components/CheckoutActions.jsx'
import { Helmet } from "react-helmet-async";

function PaymentOptions() {
  return (
    <div>
      <CheckoutActions step1 step2 step3></CheckoutActions>
          <div className="small-container">
          <Helmet>
                <title>Pa</title>
              </Helmet> 
    </div>
      
      </div>
  )
}

export default PaymentOptions;
