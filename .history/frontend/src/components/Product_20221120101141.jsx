import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Product = (props) => {
  const { product } = props;
  return (
    <Card key={product.slug}>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} style={{"width": "350px", "height":"350px" }} />
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
