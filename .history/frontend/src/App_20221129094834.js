import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import Footer from './components/Footer.jsx'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import { Store } from './Store';
import Cart from './pages/Cart.jsx';
import SignIn from './pages/SignIn.jsx';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import ShippingAddress from './pages/ShippingAdress.jsx'
import SingUp from './pages/SignUp.jsx'
import PaymentOption from './pages/PaymentOption.jsx';
import PlaceOrder from './pages/PlaceOrder.jsx';
import Order from './pages/Order.jsx';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";



function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentOption');
    window.location.href = '/signin';
  };
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
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
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                    Sign In</Link>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container className="mt-4 ">
          <Routes >
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SingUp />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <PayPalScriptProvider options={{ "client-id": YOUR_CLIENT_ID }}>
  
            <Route path="/order/:id" element={<Order />} />
            <Route path="/shipping" element={<ShippingAddress />} />
            <Route path="/payment" element={<PaymentOption />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
        {/* <Footer /> */}
        <footer className=" footer text-center fw-bold">
          All right reserved
        </footer>
      </div>
    </BrowserRouter>
  );

}

export default App;
