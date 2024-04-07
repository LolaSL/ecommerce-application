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
              <p className="arts_shop">
                The Arts Shop is the arts gallery and shop. It is a hospitable
                place that is known for its rich collection and variety of
                presented ideas.
              </p>
              <h2>Arts Shop Goal</h2>
              <ul>
                <li>
                  To study, preserve, represent and popularise the World Arts.
                </li>
                <li>
                  To drawing the attention of society to the important role of
                  art in general and collection in particular.
                </li>
                <li>
                  To make people's lives better by opening wide access to
                  masterpieces of World Arts.
                </li>
              </ul>
              <h3>Arts Shop Goal</h3>
              <ol>
                <li>Inspiration</li>
                <li>Pride</li>
                <li>Orientation on visitors</li>
                <li>Creativity</li>
                <li>Openness for cooperation</li>
                <li>Hospitality</li>
                <li>Professionalism</li>
              </ol>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default AboutArtsShop;