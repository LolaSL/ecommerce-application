import React from "react";
import { Helmet } from "react-helmet-async";
import aboutImage from '../../public/';
const AboutArtsShop = () => {
  return (
    <div>
      <Helmet>
        <title> About Arts Shop</title>
      </Helmet>
      <div>
        <div className="site-container">
          <article className="about">
            <h1 className="text-center mb-2 py-4 fw-bold">About Arts Shop </h1>
            <div className="about_arts_shop pt-4">
              <img
                className="d-block w-100 responsive rounded shadow border"
                src="/images/21.jpg"
                alt="Artling"
              />
            </div>
            <h2 className="justify-content-center text-center pt-4">Arts Shop Mission</h2>
            <p
              className="arts_shop_about_paragraph pt-4 fs-xl"
              style={{ textAalign: "justify", padding:'15px' }}
            >
              The Arts Shop serves as both an art gallery and a retail space.
              It’s a welcoming environment renowned for its extensive collection
              and the breadth of concepts it showcases.
            </p>
          </article>
          <article className="about mb-2">
            <h2 className="justify-content-center text-center pt-4">Arts Shop Goals</h2>
            <ul style={{ textAalign: "justify" }}>
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
            </ul>
          </article>
          <article className=" about mb-4">
            <h2 className="justify-content-center text-center pt-4">Arts Shop Values</h2>
            <ol>
              <li>Inspiration.</li>
              <li>Pride.</li>
              <p style={{ textAalign: "justify" }}>
                We celebrate local artists and acknowledge that we have to
                uphold the Arts Shop's heritage, which includes maintaining the
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
                global stages, ensuring our initiatives, releases, and
                gatherings are varied, high-quality, and pertinent.
              </p>
              <li>Hospitality.</li>
              <p style={{ textAalign: "justify" }}>
                We consistently adhere to the principles of openness and
                accessibility.
              </p>
              <li>Professionalism.</li>
            </ol>
          </article>
        </div>
      </div>
    </div>
  );
};

export default AboutArtsShop;
