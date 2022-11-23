import React, { useContext } from "react";
import { Store } from "../Store";
import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Cart = () => {
  const { state, dispatch: ctxDispatch } = useContext();
  const {
    cart: { cartItems },
  } = state;

  return (
    <div>
      <Helmet>
        <title> Shopping Cart</title>
          </Helmet>
          <h1>Shopping Cart</h1>
          <Row>
              
          </Row>
    </div>
  );
};

export default Cart;
