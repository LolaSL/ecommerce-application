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
          <p className="carousel-text lead fw-bold fs-2">
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
            src="/images/4.jpg"
            className="d-block h-100 w-100"
            alt="White gold Art Deco bracelet."
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
            src="https://cdn.singulart.com/artworks/v2/cropped/5523/main/fhd/281489_a99310bee6b7b4e79a1a2e896f8369fa.jpeg"
            className=" d-block  h-100 w-100"
            alt="The House By The River"
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
            src="https://rutherston.com/wp-content/uploads/2019/09/Ivory-Netsuke-of-a-Dragon-Emerging-From-an-Alms-Bowl-by-Okatomo_MR2918_v1.jpg"
            alt="Dragon Netsuke"
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
