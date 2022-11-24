import React, { useReducer, useEffect } from "react";
import axios from "axios";
import logger from "use-reducer-logger";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product";
import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader";
import Message from "../components/Message";


const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, productList: action.payload, loading: false };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Home = () => {
  const [{ loading, error, productList }, dispatch] = useReducer(
    logger(reducer),
    {
      productList: [],
      loading: true,
      error: "",
    }
  );
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
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
        <title>Featured Arts</title>
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
  );
};

export default Home;
