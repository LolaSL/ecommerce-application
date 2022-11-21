import React from "react";
import { Link } from "react-router";
import Card from "react-router-bootstrap/Card";

const Product = () => {
  const { product } = props;
  return (
    <Card key={product.slug}>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        {" "}
        <Link to={`/product/${product.slug}`}>
          <Card.Ti> {product.name}</Card.Ti>
        </Link>
      </Card.Body>
      <div className="product-information">
        <p>
          {" "}
          <strong>{product.price}</strong>
        </p>
        <button>Add to cart</button>
      </div>
    </Card>
  );
};

export default Product;
