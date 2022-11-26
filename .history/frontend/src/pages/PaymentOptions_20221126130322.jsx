import React from 'react';
import CheckoutActions from '../components/CheckoutActions.jsx'
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



function PaymentOptions() {
    const submitHandler =
  return (
    <div>
      <CheckoutActions step1 step2 step3></CheckoutActions>
          <div className="small-container">
          <Helmet>
                <title>Payment Options</title>
              </Helmet> 
              <h1>Payment Options</h1>
              <Form onSubmit={submitHandler}></Form>
    </div>
      
      </div>
  )
}

export default PaymentOptions;
