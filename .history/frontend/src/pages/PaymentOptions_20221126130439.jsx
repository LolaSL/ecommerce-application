import React from 'react';
import CheckoutActions from '../components/CheckoutActions.jsx'
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Store } from '../Store';
import { useNavigate } from 'react-router-dom';

function PaymentOptions() {
    const submitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <div>
      <CheckoutActions step1 step2 step3></CheckoutActions>
          <div className="small-container">
          <Helmet>
                <title>Payment Options</title>
              </Helmet> 
              <h1>Payment Options</h1>
              <Form onSubmit={submitHandler}>
              <div className="mb-3">
            <Form.Check
              type="radio"
              id="PayPal"
              label="PayPal"
              value="PayPal"
              checked={paymentMethodName === 'PayPal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Stripe"
              label="Stripe"
              value="Stripe"
              checked={paymentMethodName === 'Stripe'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Button type="submit">Continue</Button>
          </div>
              </Form>
    </div>
      
      </div>
  )
}

export default PaymentOptions;
