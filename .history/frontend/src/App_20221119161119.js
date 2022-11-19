import data from './'
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
          data
       }
       </main>
    </div>
  );
}

export default App;
