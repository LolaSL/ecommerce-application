import React, { useReducer, useEffect } from "react";
import Event from "../components/Event";
import axios from "axios";
import logger from "use-reducer-logger";
import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, eventList: action.payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Events = () => {
  const [{ loading, error, eventList }, dispatch] = useReducer(
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
      <Container className="container d-block">
      <h1 className="text-center mb-2 py-4 fw-bold">Events</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
       
          <Row>
            {eventList.map((event, index) => (
              <Col key={index} sm={16} md={5} lg={9} className="mb-3 pt-2">
                <Event event={event} />
              </Col>
            ))}
          </Row>
              
       
      )} </Container>
    </div>
  );
};

export default Events;
