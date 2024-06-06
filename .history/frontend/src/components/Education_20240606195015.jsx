import React from 'react';
import { Helmet } from "react-helmet-async";


const Education = () => {
  return (
    <div>
      <Helmet>
      <title>What Do We Teach At The  Arts Factory?</title>
        </Helmet>
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
              className="arts_shop_about_paragraph pt-4 fs-xl"
              style={{ textAalign: "justify", fontWeight: "bold" }}
            >
              The Arts Shop serves as both an art gallery and a retail space.
              It’s a welcoming environment renowned for its extensive collection
              and the breadth of concepts it showcases.
            </p>
          </article>
      
    </div>
  )
}

export default Education