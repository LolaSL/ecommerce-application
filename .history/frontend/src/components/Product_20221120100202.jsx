import React from 'react'
import {Link} from 'react-router'



const Product = () => {
    const { product } = props;
  return (
    <Card key={product.slug}>
                  <Link to={`/product/${product.slug}`}>
                    <img src={product.image} className="card-img-top" alt={product.name} />
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
                </Card>
  )
}

export default Product;