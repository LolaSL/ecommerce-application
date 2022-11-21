import React from "react";
import { Link } from "react-router";
import Card from "reactbootstrap/Card";
import Button from "react-router-bootstrap/Button";

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
    </Card>
  );
};

export default Product;
