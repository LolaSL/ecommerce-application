import {useParams} from 'react-router-dom';

function ProductDetail() {
    const params = useParams();
    const { slug } = params;

  return (
      <div>
          <h1>{slug}</h1>
          <div className="product" key={product.slug}>
                  <Link to={`/product/${product.slug}`}>
                    <img src={product.image} alt={product.name} />
                  </Link>
                  <div className="product-information">
                    <Link to={`/product/${product.slug}`}>
                      <p> {product.name}</p>
                    </Link>
                    <p>
                      {" "}
                      <strong>{product.price}</strong>
                    </p>
                    <button>Add to cart</button>
                  </div>
                </div>
      </div>
  )
}
export default ProductDetail;