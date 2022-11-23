import React, { useContext } from "react";
import { Store } from "../Store";
import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Message from "../components/Message";
import { Link } from 'react-router-dom';


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
              <Col md={8}>
                  {cartItems.length === 0 ? (
                      <Message>Cart is empty.
                      <Link to="/"> Let's shopping</Link></Message>
                  ) : (
                          <ListGroup>
                              {cartItems.map((item) => (
                                  <ListGroup.Item key={item._id}>
                                      <Row className="align-items-center"></Row>
                              </ListGroup.Item> 
                          ))}    
                     </ListGroup>   
                  )
                
                } 
              </Col>
              <Col md={4}></Col>
          </Row>
    </div>
  );
};

export default Cart;
