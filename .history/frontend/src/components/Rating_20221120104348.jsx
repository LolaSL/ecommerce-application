import React from "react";

const Rating = (props) => {
  const { rating, numReviews } = props;
  return (
    <div className="rating">
      <span>
        <i
          classname={
            rating >= 1
              ? "fas fa-star"
              : rating >= 0.5
              ? "fas-fa-star-half-alt"
              : "fas fa-star"
          }
        />
          </span>
          <span>
        <i
          classname={
            rating >= 1
              ? "fas fa-star"
              : rating >= 0.5
              ? "fas-fa-star-half-alt"
              : "fas fa-star"
          }
        />
      </span>
    </div>
  );
};

export default Rating;
