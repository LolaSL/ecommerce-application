import data from './data'
function App() {
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
}

export default App;
