import React from 'react'

const Rating = (props) => {
    const { rating, numReviews } = props;
  return (
    <div className = "rating">
          <span>
              <i classname={rating >= 1 ? 'fas '}></i>
      </span>
    </div>
  )
}

export default Rating;
