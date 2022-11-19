import data from './data';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'

function App() {
  <BrowserRouter>
    return (
    <div className="App">
      <header className="header">
        <a
          className="link"
          href="/"
          rel="noopener noreferrer"
        >
          Arts Shop
        </a>
      </header>
      <main>
        <Routes >
          < path="/" element={<Home />} /></Routes>
          <h1>Featured Arts</h1>
          <div className="products">
            {
              data.productList.map(product => (
                <div className="product" key={product.slug}>
                  <a href={`/product/${product.slug}`}>
                    <img src={product.image} alt={product.name} /></a>
                  <div className="product-information" >
                    <a href={`/product/${product.slug}`}>
                      <p> {product.name}</p></a>
                    <p> <strong>{product.price}</strong></p>
                    <button>Add to cart</button>
                  </div>
                </div>
              ))}
          </div>
     
      </main>

    </div>
    );
  </BrowserRouter>
}

export default App;
