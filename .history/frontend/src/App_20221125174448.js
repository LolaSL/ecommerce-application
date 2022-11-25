import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import Footer from './components/Footer.jsx'
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import { Store } from './Store';
import Cart from './pages/Cart.jsx';
import SignIn from './pages/SignIn.jsx';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  return (<BrowserRouter>
    <div className="d-flex flex-column site-container">
      <header className="header">
        <Navbar className="navbar nav" bg="dark" variant="dark">
          <Container className="container">
            <Link className="link" to="/" rel="noopener noreferrer">
              <Navbar.Brand>Arts Shop</Navbar.Brand>
            </Link>
            <Nav className="me-auto">
              <Link to='/cart' className="nav-link">
                Cart
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</Badge>
                )}
              </Link>
              {userInfo ? (
             <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
             <Link to="/profile">
               <NavDropdown.Item>User Profile</NavDropdown.Item>
             </Link>
             <Link to="/orderhistory">
               <NavDropdown.Item>Order History</NavDropdown.Item>
             </Link>
             <NavDropdown.Divider />
             <Link
               className="dropdown-item"
               to="#signout"
               onClick={signoutHandler}
             >
               Sign Out
             </Link>
           </NavDropdown>
              ): (
                <Link className = "nav-link" to = "/signin">
                Sign In</Link>
              ) }
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Container className="mt-4">
        <Routes >
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
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
