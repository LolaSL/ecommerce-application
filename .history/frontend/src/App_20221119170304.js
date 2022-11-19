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
            <div className="product" key={product.slug}><a href={`/product/${product.slug}`}></a>
              <img src={product.image} alt={product.name} />
              <div className="product-information" >
              
                <p> {product.name}</p>
                <p> {product.price}</p>
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
