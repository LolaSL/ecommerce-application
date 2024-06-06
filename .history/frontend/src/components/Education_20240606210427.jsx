import React from "react";
import { Helmet } from "react-helmet-async";

const Education = () => {
  return (
    <div>
      <Helmet>
        <title>Education At The Arts Shop</title>
      </Helmet>
      <div className="education-container">
        <h1>What Do We Teach At The Arts Shop?</h1>
        <div className="grid-container">
          <article className="grid-item">
            <h2 className="text-center mb-2 py-4 fw-bold">PRINTMAKING</h2>
            <div className="education_arts_shop pt-4">
              <img
                className="d-block w-100 rounded shadow border"
                src="/images/24.jpg"
                alt="Printmaking"
              />
            </div>
            <p className="education_paragraph pt-4">
              The process of creating artwork by printing, normally on paper,
              but also on fabric, wood, metal, and other surfaces using ink and
              etchings.
            </p>
          </article>
          <article className="grid-item">
            <h2 className="text-center mb-2 py-4 fw-bold">ORGANIC ARTIST</h2>
            <div className="education_arts_shop pt-4">
              <img
                className="d-block w-100 rounded shadow border"
                src="/images/25.jpg"
                alt="ORGANIC ARTIST"
              />
            </div>
            <p className="education_paragraph pt-4">
              The process of using salt, honey, pigment, flowers, and more to
              paint and create, building sustainable young artists for the
              future!
            </p>
          </article>
          <article className="grid-item">
            <h2 className="text-center mb-2 py-4 fw-bold">PHOTOGRAPHY</h2>
            <div className="education_arts_shop pt-4">
              <img
                className="d-block w-100 rounded shadow border"
                src="/images/26.jpg"
                alt="PHOTOGRAPHY"
              />
            </div>
            <p className="education_paragraph pt-4">
              The process of capturing images digitally and via the film process
              with DSLRs and disposable cameras, then the process of editing
              digitally on Adobe Photoshop.
            </p>
          </article>
          <article className="grid-item">
            <h2 className="text-center mb-2 py-4 fw-bold">CYANOTYPES</h2>
            <div className="education_arts_shop pt-4">
              <img
                className="d-block w-100 rounded shadow border"
                src="/images/27.jpg"
                alt="CYANOTYPES"
              />
            </div>
            <p className="education_paragraph pt-4">
              The photographic process is by painting cyanotype chemicals on
              paper, placing a negative atop the painted paper, and exposing the
              negative and paper to the sun.
            </p>
          </article>
          <article className="grid-item">
            <h2 className="text-center mb-2 py-4 fw-bold">DRAWING</h2>
            <div className="education_arts_shop pt-4">
              <img
                className="d-block w-100 rounded shadow border"
                src="/images/28.jpg"
                alt="DRAWING"
              />
            </div>
            <p className="education_paragraph pt-4">
              The art or technique of representing an object or outlining a
              figure, plan, or sketch by means of lines. We teach various levels
              of drawing.
            </p>
          </article>
          <article className="grid-item">
            <h2 className="text-center mb-2 py-4 fw-bold">PAINTING</h2>
            <div className="education_arts_shop pt-4">
              <img
                className="d-block w-100 rounded shadow border"
                src="/images/29.jpg"
                alt="PAINTING"
              />
            </div>
            <p className="education_paragraph pt-4">
              Painting is the act or process of using paint. The paint can
              create an artwork known as a painting, or it can be used more
              practically as a protective coating or form of decoration.
              Paintings are a form of visual art that captures the expression of
              ideas and emotions on a two-dimensional surface.
            </p>
          </article>
        </div>
      </div>
      <div>
        <article>
          <h2>WHAT IS ARTs SHOP?</h2>
          <p>
            The Artist Factory hosts and administers a comprehensive schedule of
            quality workshops taught by professional artists.  Our teaching artists
            develop lesson plans that engage media across artistic disciplines
            including photography, painting, drawing, printmaking,
            drawing and more. We believe that partnering with local organizations helps
            our youth achieve success at school, home, and beyond. To learn more
            about bringing Arts Shop to your organization please
            contact our program coordinator Kasey Lindley at
            kasey@ogdencontemporaryarts.org. Are you interested in education, please contact us 
        
          </p>
        </article>
      </div>
    </div>
  );
};

export default Education;
