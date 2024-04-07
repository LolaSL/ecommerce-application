import React from "react";
import { Helmet } from "react-helmet-async";

const AboutArtsShop = () => {
  return (
    <div>
      <Helmet>
        <title> About Arts Shop</title>
      </Helmet>
      <div>
        <h1>About Arts Shop</h1>
        <div className="site-container">
          <article>
            <h1>Arts Shop Mission</h1>
            <div className="events">
            <img
              className="card-img-top rounded"
              src="/frontend/public/images/20.jpg"
              alt="Essential Art Sta"
              />
              </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default AboutArtsShop;
