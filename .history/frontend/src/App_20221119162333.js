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
        <div className="pro">
        {
          data.productList.map(product => (
            <div key={product.slug}>
              <img src={product.image} alt={product.name} />
              <p> {product.name}</p>
              <p> {product.price}</p>
            </div>
          ))
       }</div>
       </main>
    </div>
  );
}

export default App;
