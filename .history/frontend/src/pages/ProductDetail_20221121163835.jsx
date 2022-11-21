import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

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
function ProductDetail() {
    const params = useParams();
    const [{ loading, error, product }, dispatch] = useReducer(
        (reducer),
        {
          productList: [],
          loading: true,
          error: "",
        }
      );
    const { slug } = params;
    useEffect(() => {
        const fetchData = async () => {
          dispatch({ type: "FETCH_REQUEST" });
          try {
            const result = await axios.get(`/api/products/slug/$`);
            dispatch({ type: "FETCH_SUCCESS", payload: result.data });
          } catch (error) {
            dispatch({ type: "FETCH_ERROR", payload: error.message });
          }
        };
        fetchData();
      }, []);
  return (
      <div>
          <h1>{slug}</h1>
          
      </div>
  )
}
export default ProductDetail;