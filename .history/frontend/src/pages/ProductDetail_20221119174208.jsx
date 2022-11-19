import React, {useParams} from 'react';

export const ProductDetail = () => {
    const params = useParams();
    const { slug } = params;

  return (
      <div>
          <h1>Product Details</h1>
      </div>
  )
}
