import React from "react";
import { Link } from "react-router";
import Card from "react-router-bootstrap/Card";
import Button from "react"

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
          <Card.Title> {product.name}</Card.Title>
              </Link>
              <Card.Text><strong>${product.price}</strong></Card.Text>
      <Button>Add to cart</Button>
          </Card.Body>
      {/* <div className="product-information">
        <p>
          {" "}
          
        </p>
        <button></button>
      </div> */}
    </Card>
  );
};

export default Product;
