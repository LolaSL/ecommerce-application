import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import  Navbar from "react-bootstrap/Nav";
import LinkContainer from ""

function App() {
 
    return ( <BrowserRouter>
    <div className="App">
        <header className="header">
          <Navbar className="navbar nav" bg="secondary" variant="secondary">
            <Container className="container">
              <LinkContainer>
                <Navbar.Brand>Arts Shop</Navbar.Brand>
              </LinkContainer>
              
            </Container>
          </Navbar>
        <Link
          className="link"
          to="/"
          rel="noopener noreferrer"
        >
   
        </Link>
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
