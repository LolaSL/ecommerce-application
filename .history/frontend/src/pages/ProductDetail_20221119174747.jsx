import {useParams} from 'react';

function ProductDetail() {
    const params = useParams();
    const { slug } = params;

  return (
      <div>
          <h1>{slug}</h1>
      </div>
  )
}
export default ProductDetail;