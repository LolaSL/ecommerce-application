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
        {
          data.products.map(product => (
            <div>
              <img />
            </div>
          ))
       }
       </main>
    </div>
  );
}

export default App;
