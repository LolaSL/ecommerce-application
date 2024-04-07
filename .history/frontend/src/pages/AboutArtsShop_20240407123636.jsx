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
                alt="Artling"
              />
              <p>
                The Arts Shop is the arts gallery and shop. It is a hospitable
                place that is known for its rich collection and variety of
                presented ideas.
              </p>
              <h2>Arts Shop Goal</h2>
              <ul>
                <li></li>
                <li></li>
              </ul>
              <p>To study, preserve, represent and popularise the World Arts</p>

            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default AboutArtsShop;
