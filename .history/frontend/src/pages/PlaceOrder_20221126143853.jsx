import React, { useContext,  useReducer } from "react";
import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Store } from "../Store";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import Loader from '../components/Loader';
import CheckoutActions from "../components/CheckoutActions";

const reducer = (state, action) => {
    switch (action.type) {
      case 'CREATE_REQUEST':
        return { ...state, loading: true };
      case 'CREATE_SUCCESS':
        return { ...state, loading: false };
      case 'CREATE_ERROR':
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  


const PlaceOrder = () => {

    const navigate = useNavigate();
    const [{ loading }, dispatch] = useReducer(reducer, {
        loading: false,
      });
      const { state, dispatch: ctxDispatch } = useContext(Store);
      const { cart, userInfo } = state;
  return (
    <div>
      <CheckoutActions step1 step2 step3 step4></CheckoutActions>
      <Helmet>
        <title>Preview Order</title>
      </Helmet>
      <h1 className="pt-4">Preview Order</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Shopping</Card.Title>
              <Card.Text>
                <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                <strong>Address: </strong> {cart.shippingAddress.address},
                {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},
                {cart.shippingAddress.country}
                          </Card.Text>
                          <Link to="/shipping">Edit</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default PlaceOrder;
