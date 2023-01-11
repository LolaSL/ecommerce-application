import React, { useState } from "react";
import {FaStar} from 'react-icons/fa'

function Rating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null)
 
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const numReviews = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={numReviews}
              onClick={() => setRating(numReviews)}
             
            >
            </input>
            <FaStar className="star" color={numReviews <= (hover || rating) ? 'coral' : 'secondary'} size={25} 
            onMouseEnter={() => setHover(numReviews)}
            onMouseLeave={()=> setHover(null)}/>
          </label>
           
        ); 
      })}
      <p>The rating is {rating}</p>
    
    </div>
  );
  function Rating(props) {
    const { rating, numReviews, caption } = props;
    return (
      <div className="rating">
        <span>
          <i
            className={
              rating >= 1
                ? 'fas fa-star'
                : rating >= 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          />
        </span>
        <span>
          <i
            className={
              rating >= 2
                ? 'fas fa-star'
                : rating >= 1.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          />
        </span>
        <span>
          <i
            className={
              rating >= 3
                ? 'fas fa-star'
                : rating >= 2.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          />
        </span>
        <span>
          <i
            className={
              rating >= 4
                ? 'fas fa-star'
                : rating >= 3.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          />
        </span>
        <span>
          <i
            className={
              rating >= 5
                ? 'fas fa-star'
                : rating >= 4.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          />
        </span>
        {caption ? (
          <span>{caption}</span>
        ) : (
          <span>{' ' + numReviews + ' reviews'}</span>
        )}
      </div>
    );
  }
  export default Rating;
