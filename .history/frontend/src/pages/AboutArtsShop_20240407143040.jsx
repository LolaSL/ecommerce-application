import React from "react";
import { Helmet } from "react-helmet-async";

const AboutArtsShop = () => {
  return (
    <div>
      <Helmet>
        <title> About Arts Shop</title>
      </Helmet>
      <div>
        <div className="site-container">
          <article>
            <h1 className="text-center mb-2 py-4 fw-bold">Arts Shop Mission</h1>
            <div className="about_arts_shop pt-4">
              <img
                className="d-block w-100 rounded shadow border"
                src="/images/21.jpg"
                alt="Artling"
              />
            </div>
            <p
              className="arts_shop_about_paragraph pt-4"
              style={{ textAalign: "justify", fontWeight: "bold" }}
            >
              The Arts Shop is the arts gallery and shop. It is a hospitable
              place that is known for its rich collection and variety of
              presented ideas.
            </p>
          </article>
          <article>
            <h2 className="justify-content-center pt-4">Arts Shop Goals</h2>
            <ol style={{ textAalign: "justify" }}>
              <li>
                To study, preserve, represent and popularise the World Arts.
              </li>
              <li>
                To drawing the attention of society to the important role of art
                in general and collection in particular.
              </li>
              <li>
                To make people's lives better by opening wide access to
                masterpieces of World Arts.
              </li>
            </ol>
          </article>
          <article>
            <h2>Arts Shop Values</h2>
            <li>Inspiration.</li>
            <li>Pride.</li>
            <p style={{ textAalign: "justify" }}>
              We celebrate local artists and acknowledge that we have to uphold
              the Arts Shop's heritage, which includes maintaining the
              collection of arts.
            </p>
            <li>Orientation on visitors.</li>
            <p style={{ textAalign: "justify" }}>
              In orchestrating our operations, we prioritize our audience’s
              preferences.
            </p>
            <li>Creativity.</li>
            <p style={{ textAalign: "justify" }}>
              We are innovating our collaboration methods with the Arts Shop
              collection and various locations. Our projects engage not just
              experts but also attract a diverse group of participants.
            </p>
            <li>Openness for cooperation.</li>
            <p style={{ textAalign: "justify" }}>
              We are proactive in pursuing collaborative ventures with various
              entities and gifted individuals across community, national, and
              global stages, ensuring our initiatives, releases, and gatherings
              are varied, high-quality, and pertinent.
            </p>
            <li>Hospitality.</li>
            <p style={{ textAalign: "justify" }}>
              We consistently adhere to the principles of openness and
              accessibility.
            </p>
            <li>Professionalism.</li>
          </article>
        </div>
      </div>
    </div>
  );
};

export default AboutArtsShop;
