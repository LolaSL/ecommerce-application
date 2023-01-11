import React, { useState } from "react";
import {FaStar} from 'react-icons/fa'

function Rating(props) {
  const [rating, setRating] = useState(props);
  const [hover, setHover] = useState(null)
 
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const numReviews = i + 1;
        return (
          <label key={i}>
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
      <p>The rating is {numRe}</p>
    
    </div>
  );

}

export default Rating;
