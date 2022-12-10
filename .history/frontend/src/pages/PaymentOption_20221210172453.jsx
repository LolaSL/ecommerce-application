import React, { useContext, useEffect, useState } from 'react';
import CheckoutActions from '../components/CheckoutActions.jsx'
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Store } from '../Store';
import { useNavigate } from 'react-router-dom';

function PaymentOption() {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
      cart: { shippingAddress, paymentOption },
    } = state;
  
    const [paymentOptionName, setPaymentOption] = useState(
      paymentOption|| 'PayPal'
    );

    useEffect(() => {
        if (!shippingAddress.address) {
          navigate('/shipping');
        }
      }, [shippingAddress, navigate]);
    const submitHandler = (e) => {
        e.preventDefault();
        ctxDispatch({ type: 'SAVE_PAYMENT_OPTION', payload: paymentOptionName });
    localStorage.setItem('paymentOption', paymentOptionName);
    navigate('/placeorder');
  };
    
  return (
    <div>
      <CheckoutActions step1 step2 step3></CheckoutActions>
          <div className="container small-container ">
          <Helmet>
                <title>Payment Option</title>
              </Helmet> 
              <h1 className="pt-4 mb-4">Payment Option</h1>
              <Form onSubmit={submitHandler}>
              <div className="pt-4 mb-3">
            <Form.Check
              type="radio"
              id="PayPal"
              label="PayPal"
              value="PayPal"
              checked={paymentOptionName === 'PayPal'}
              onChange={(e) => setPaymentOption(e.target.value)}
            />
          </div>
          {/* <div className="mb-3">
            <Form.Check
              type="radio"
              id="Stripe"
              label="Stripe"
              value="Stripe"
              checked={paymentOptionName === 'Stripe'}
              onChange={(e) => setPaymentOption(e.target.value)}
            />
          </div> */}
          <div className="pt-4 mb-3">
            <Button type="submit">Continue</Button>
          </div>
              </Form>
    </div>
      
      </div>
  )
}

export default PaymentOption;
