import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Product = (props) => {
  const { product } = props;

  return (
    <Card className="shadow border">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img" alt={product.name} />
      </Link>
      <Card.Body>
        {" "}
        <Link to={`/product/${product.slug}`}>
          <Card.Title> {product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} />
              <Card.Text><strong>${product.price}</strong></Card.Text>
      <Button>Add to cart</Button>
          </Card.Body>
    </Card>
  );
};

export default Product;
