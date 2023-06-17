import React, { useReducer, useEffect } from "react";
import { Button } from 'react-bootstrap';
import Event from '../components/Event';
import axios from "axios";
import logger from "use-reducer-logger";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_REQUEST":
        return { ...state, loading: true };
      case "FETCH_SUCCESS":
        return { ...state, eventsList: action.payload, loading: false };
      case "FETCH_ERROR":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

function Events() {

    const [{ loading, error, eventsList }, dispatch] = useReducer(
        logger(reducer),
        {
            eventsList: [],
            loading: true,
            error: "",
        }
    );
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "FETCH_REQUEST" });
            try {
                const result = await axios.get("/api/events");
                dispatch({ type: "FETCH_SUCCESS", payload: result.data });
            } catch (error) {
                dispatch({ type: "FETCH_ERROR", payload: error.message });
            }
        };
        fetchData();
    }, []);



    


    return (
        <div>
    <Helmet>
        <title>Events</title>
      </Helmet>
      <h1 className="text-center mb-2 py-4 fw-bold">Featured Arts</h1>
      <div className="products">
        {loading ? (
          <Loader/>
        ) : error ? (
         <Message variant="danger">{error}</Message>
        ) : (
          <Row>
            {productList.map((product) => (
              <Col key={product.slug} sm={12} md={4} lg={3} className="mb-3 pt-2">
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
    )
}

export default Event;