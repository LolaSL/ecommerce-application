import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProductDetail from './pages/ProductDetail.jsx';

function App() {
 
    return ( <BrowserRouter>
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
            <Route  path="/product/:slug" element={<ProductDetail />}></Route>
          <Route path="/" element={<Home />}></Route>
          </Routes>
      </main>
      </div>
    </BrowserRouter>
    );
 
}

export default App;
