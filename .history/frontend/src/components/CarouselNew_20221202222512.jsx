import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselNew() {
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };
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
          <p className="carousel-title fw-bold display-2 mb-2" style={{color:"teal"}}>NEW ARRIVALS</p>
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
            src="/images/4.jpg"
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
export default CarouselNew;
{/* <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/4.jpg/800x400?text=Diamond Bracelet&bg=282c34"
          alt="Diamond Bracelet"
        />
        <Carousel.Caption>
          <h3>Diamond Bracelet</h3>
          <p>Gorgeous sparkling hinged bangle aligned with round brilliant cut diamonds and sapphires alternately set in high polished 14kt white gold.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/4.jpg/800x400?text=Cerries&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Cerries</h3>
          <p>This unique and original contemporary artwork 'Cherries'.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

}

export default CarouselNew; */}