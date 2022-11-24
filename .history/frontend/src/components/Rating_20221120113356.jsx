import React from "react";

const Rating = (props) => {
  const { rating, numReviews } = props;
  return (
    <div className="rating">
      <span>
        <i
          className={
            rating>= 1
              ? "fa fa-star"
              : rating>= 0.5
              ? "fa-fa-star-half-alt"
              : "fa fa
          }
        />
      </span>
      <span>
        <i
          className={
            rating>= 2
              ? "fa fa-star"
              : rating>= 1.5
              ? "fas-fa-star-half-alt"
              : "fas fa-star"
          } aria-hidden="true"
        />
      </span>
      <span>
        <i
          className={
            rating>= 3
              ? "fas fa-star"
              : rating>= 2.5
              ? "fas-fa-star-half-alt"
              : "fas fa-star"
          } aria-hidden="true"
        />
      </span>
      <span>
        <i
          className={
            rating>= 4
              ? "fas fa-star"
              : rating>= 3.5
              ? "fas-fa-star-half-alt"
              : "fas fa-star"
          } aria-hidden="true"
        />
      </span>
      <span>
        <i
          className={
            rating>= 5
              ? "fas fa-star"
              : rating>= 4.5
              ? "fas-fa-star-half-alt"
              : "fas fa-star"
          } aria-hidden="true"
        />
      </span>
      <span>{numReviews} reviews</span>
    </div>
  );
};

export default Rating;