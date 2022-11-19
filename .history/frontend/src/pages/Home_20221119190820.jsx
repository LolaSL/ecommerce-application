import React, { useState, useEffect } from "react";
import data from "../data";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/products");
      setProducts
    };
  }, []);
  return (
    <div>
      <h1>Featured Arts</h1>
      <div className="products">
        {data.productList.map((product) => (
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
        ))}
      </div>
    </div>
  );
};

export default Home;
