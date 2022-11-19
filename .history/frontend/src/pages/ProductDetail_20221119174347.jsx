import React, {useParams} from 'react';

const ProductDetail = () => {
    const params = useParams();
    const { slug } = params;

  return (
      <div>
          <h1>{slug}</h1>
      </div>
  )
}
export 