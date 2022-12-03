// import React from 'react';


// function CarouselNew() {

//   return (
//     <div
//       id="carouselExampleIndicators"
//       className="carousel  shadow p-3  slide justify-content-center align-content-center bg-light mb-4"
//       data-bs-ride="true"
//     >
//       <div className="carousel-indicators ">
//         <button
//           type="button"
//           data-bs-target="#carouselExampleIndicators"
//           data-bs-slide-to="0"
//           className="active"
//           aria-current="true"
//           aria-label="Slide 1"
//         ></button>
//         <div className="carousel-caption d-none d-md-block">
//           <p className="carousel-title fw-bold display-2 mb-2" style={{color:"teal"}}>NEW ARRIVALS</p>
//           <p className="carousel-text lead fw-bold fs-2 ">
//             CHECK OUT ALL ARTS TRENDS
//           </p>
//         </div>
//         <button
//           type="button"
//           data-bs-target="#carouselExampleIndicators"
//           data-bs-slide-to="1"
//           aria-label="Slide 2"
//         ></button>
//         <button
//           type="button"
//           data-bs-target="#carouselExampleIndicators"
//           data-bs-slide-to="2"
//           aria-label="Slide 3"
//         ></button>
//       </div>
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <img
//             src="/images/4.jpg"
//             className="d-block h-100 w-100"
//             alt="Diamond Bracelet."
//             style={{
//               boxShadow: "2px",
//               maxWidth: "100%",
//               maxHeight: "100%",
//               display: "inline - block",
//             }}
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="/images/5.jpg"
//             className=" d-block  h-100 w-100"
//             alt="Cerries"
//             style={{
//               boxShadow: "2px",
//               maxWidth: "100%",
//               maxHeight: "100%",
//               display: "inline - block",
//             }}
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="/images/7.jpg"
//             alt="Peacock Wall Clock"
//             className="d-block h-100 w-100"
//             style={{
//               boxShadow: "2px",
//               maxWidth: "100%",
//               maxHeight: "100%",
//               display: "inline - block",
//             }}
//           />
//         </div>
//       </div>
//       <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleIndicators"
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleIndicators"
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };
// export default CarouselNew;
import React, { useState, useEffect } from 'react';
import { data } from '../data';
import Carousel from 'react-bootstrap/Carousel';


// const getCarouselArt = async () => {
//     const { eventsCollection } = mockData();
//     const currentLanguage = localStorage.getItem('i18nextLng');
//     return await eventsCollection.getEvents(currentLanguage);

// }
// console.log(getCarouselArt())
// function ArtGalleryPage() {
//     const [t, i18n] = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    const [carousel, setCarousel] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        getCarouselArt().then(data => {
            setCarousel(data);
            setIsLoading(false);
        })
    }, [data]);

    return isLoading ? (< div className=" loader d-flex align-items-center py-2">
        <strong>{t("loader.loader")}</strong>
        <div className="spinner-border ml-auto text-success" role="status" aria-hidden="true"></div>
    </div>) :
        carousel.length ?
            (
                <div className="container">
                    <h1>{t("carouselArt.title")}</h1>
                    <Carousel >
                        {carousel.map((slide) => {
                            const { title, type, imageUrl, information } = slide;
                            return (
                                <Carousel.Item interval={4000} key={slide.id}>
                                    <img
                                        className="d-block w-100"
                                        src={imageUrl}
                                        alt={t(title)}
                                    />
                                    <Carousel.Caption>
                                        <p>{type}</p>
                                        <p>{title}</p>
                                        <p className="text-truncate">{information}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
            ) : (<div>{t("loader.notification1")}</div>)
};

export default withTranslation()(ArtGalleryPage);