import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
function CarouselNew() {
  return (
    <Container className="container middle-container mt-4 mb-4">
      <h1 className="text-center mb-4 fw-bold"> New Arrivals</h1>
      <Carousel className="carousel mt-4 mb-4">
        <Carousel.Item>
          <img
            className="image d-block w-100 rounded border"
            src="/images/21.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <span>
            <p className="product-title fw-bold  text-light">
              Bohemian Glass Vases
            </p>
            </span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded shadow border"
            src="/images/8.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <span>
            <p className="product-title  fw-bold text-success">
            Gold Plated Silver Isis Statue
            </p>
            </span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded shadow border"
            src="/images/9.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
          <span>
            <p className="product-title  fw-bold  text-danger">
              Sunburst wall clock
            </p>
            </span>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default CarouselNew;
