import React, { useReducer, useEffect } from "react";
// import data from "../data";
import { Link } from "react-router-dom";
import axios from "axios";
import logger from 'use-reducer-logger';


const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, productList: action.payload, loading: false };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload};
     default:
      return state
  }
};


const Home = () => {
  // const [productList, setProductList] = useState([]);
  const [{loading, error, productList }, dispatch] = useReducer(logger(reducer), {
    productList:[],
    loading: true,
    error: ''
  })
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST'})
      try {
        const result = await axios.get("/api/products"); 
        dispatch({ type: 'FETCH_SUCCESS', payload:result.data})
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload:error.message})
      }
  
      // setProductList(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Arts</h1>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
            <div>{error}</div>
          ) : (
            productList.map((product) => (
              <div className="product" key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </Link>
                <div className="product-information">
                  <Link to={`/product/${product.slug}`}>
                    <p> {product.name}</p>
                  </Link>
                  <p>
                    {" "}
                    <strong>{product.price}</strong>
                  </p>
                  <button>Add to cart</button>
                </div>
              </div>
            )))}
      </div>
    </div>
  );
};

export default Home;
