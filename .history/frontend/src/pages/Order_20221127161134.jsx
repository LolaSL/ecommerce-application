import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Order = () => {
  return (
    <Loader ></Loader>
    ) : error ? (
      <Message variant="danger">{error}</Message>
    ) : (
}

export default Order;