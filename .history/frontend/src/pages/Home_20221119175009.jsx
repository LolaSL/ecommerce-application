import React from 'react';
import data from '../data';


const Home = () => {
  return (
    <div>
     <h1>Featured Arts</h1>
          <div className="products">
            {
              data.productList.map(product => (
                <div className="product" key={product.slug}>
                  <Link to={`/product/${product.slug}`}>
                    <img src={product.image} alt={product.name} /></Link>
                  <div className="product-information" >
                    <a href={`/product/${product.slug}`}>
                      <p> {product.name}</p></a>
                    <p> <strong>{product.price}</strong></p>
                    <button>Add to cart</button>
                  </div>
                </div>
              ))}
          </div>
    </div>
  )
}

export default Home;
