import React, { useReducer, useEffect } from "react";
// import data from "../data";
import { Link } from "react-router-dom";
import axios from "axios";
import logger from "use-reducer-logger";
import  Row from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";


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
  // const [productList, setProductList] = useState([]);
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

      // setProductList(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-center mb-2 py-4 fw-bold">Featured Arts</h1>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Row>
            {productList.map((product) => (
              <Col sm={6} md={4} lg={3} className="mb-3">
               <ProductDetail
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default Home;
