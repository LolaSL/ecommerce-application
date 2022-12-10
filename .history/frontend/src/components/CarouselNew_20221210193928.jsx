import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
function CarouselNew() {
  return (
    <Container className="container middle-container mt-4 mb-4">
      <h1 className="text-center mb-4 fw-bold"> New Arrivals</h1>
    <Carousel className="carousel mt-4 mb-4">
      <Carousel.Item>
        <img className="image d-block w-100 rounded border py-4" src="/images/14.jpg" alt="First slide" />
        <Carousel.Caption>
          <h1 className="product-title fw-bold  text-light">Bohemian Glass Vase</h1>
          <p className="title fw-bold  text-light">Glass vase is decorated in a stained glass window style ...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 rounded shadow border" src="/images/8.jpg" alt="Second slide" />

        <Carousel.Caption>
          <h1 className="product-title  fw-bold text-success">Egyptian Gods</h1>
          <p className="title  fw-bold text-danger">Museum quality collectible home decor figurine...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 rounded shadow border" src="/images/9.jpg" alt="Third slide" />

        <Carousel.Caption>
          <h1 className="product-title  fw-bold  text-danger">Sunburst wall clock</h1>
          <p className="title  fw-bold  text-danger">Handmade 1950s-style sunburst clock.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default CarouselNew;
