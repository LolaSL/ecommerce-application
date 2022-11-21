import React, {}
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import Footer from './components/Footer.jsx'
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";

function App() {
  const { state } = useContext();
  return (<BrowserRouter>
    <div className="d-flex flex-column site-container">
      <header className="header">
        <Navbar className="navbar nav" bg="dark" variant="dark">
          <Container className="container">
            <Link className="link" to="/" rel="noopener noreferrer">
              <Navbar.Brand>Arts Shop</Navbar.Brand>
            </Link>
            <Nav classname="me-auto">
              <Link to='/cart' className="nav-link">
                Cart
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">{cart.cartItems.length}</Badge>
                )}
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Container className="mt-4">
        <Routes >
          <Route path="/product/:slug" element={<ProductDetail />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Container>
      {/* <Footer /> */}
      <footer className="footer text-center">
        All right reserved
      </footer>
    </div>
  </BrowserRouter>
  );

}

export default App;
