import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel  shadow p-3  slide justify-content-center align-content-center bg-light mb-4"
      data-bs-ride="true"
    >
      <div className="carousel-indicators ">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <div className="carousel-caption d-none d-md-block">
          <p className="carousel-title fw-bold display-2 mb-2">NEW ARRIVALS</p>
          <p className="carousel-text lead fw-bold fs-2 ">
            CHECK OUT ALL ARTS TRENDS
          </p>
        </div>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="../"
            className="d-block h-100 w-100"
            alt="Diamond Bracelet."
            style={{
              boxShadow: "2px",
              maxWidth: "100%",
              maxHeight: "100%",
              display: "inline - block",
            }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/5.jpg"
            className=" d-block  h-100 w-100"
            alt="Cerries"
            style={{
              boxShadow: "2px",
              maxWidth: "100%",
              maxHeight: "100%",
              display: "inline - block",
            }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/7.jpg"
            alt="Peacock Wall Clock"
            className="d-block h-100 w-100"
            style={{
              boxShadow: "2px",
              maxWidth: "100%",
              maxHeight: "100%",
              display: "inline - block",
            }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Carousel;
