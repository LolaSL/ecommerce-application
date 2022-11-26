import React from 'react';
import CheckoutActions from '../components/CheckoutActions';
import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
const PlaceOrder = () => {
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
                          <Card.Text></C
                      </Card.Body>
                  </Card>
              </Col>
              <Col></Col>
      </Row>
      </div>
  )
}

export default PlaceOrder;

