import React from 'react'
import {Link} from 'react-'



const Product = () => {
    const { product } = props;
  return (
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
  )
}

export default Product;