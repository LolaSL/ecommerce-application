import React from "react";
import { Helmet } from "react-helmet-async";

const Education = () => {
  return (
    <div>
      <Helmet>
        <title>What Do We Teach At The Arts Shop?</title>
      </Helmet>
      <div>
        <div className="site-container">
          <article>
            <h1 className="text-center mb-2 py-4 fw-bold">PRINTMAKING</h1>
            <div className="about_arts_shop pt-4">
              <img
                className="d-block w-100 rounded shadow border"
                src="/images/21.jpg"
                alt="Artling"
              />
            </div>
            <p
              className="arts_shop_about_paragraph pt-4 fs-xl"
              style={{ textAalign: "justify", fontWeight: "bold" }}
            >
              The process of creating artwork by printing, normally on paper,
              but also on fabric, wood, metal, and other surfaces using ink and
              etchings.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Education;
