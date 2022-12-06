import React, { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
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
import Orders from './pages/Orders.jsx';
import Profile from './pages/Profile.jsx';
import NewArrivals from './pages/NewArrivals..jsx';
import Button from 'react-bootstrap/Button';


function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {fullBox, cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentOption');
    window.location.href = '/signin';
  };
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? fullBox
              ? 'site-container active-cont d-flex flex-column full-box'
              : 'site-container active-cont d-flex flex-column'
            : fullBox
            ? 'site-container d-flex flex-column full-box'
            : 'site-container d-flex flex-column'
        }
      >
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar className="navbar nav" bg="black" variant="dark" expand="lg">
            <Container className="container">
            <Button
                variant="dark"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <i className="fas fa-bars"></i>
              </Button>
              <Link className="a-link" to="/" rel="noopener noreferrer">
                <Navbar.Brand>New Arrivals</Navbar.Brand>
              </Link>
              <Link className="a-link text-white" to="/shop" rel="noopener noreferrer">
                Arts Shop
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto w-100 justify-content-end">
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
                      <LinkContainer to="/orders">
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
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <div
          className={
            sidebarIsOpen
              ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
          }
        >
        <Container className="mt-4 ">
          <Routes >
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SingUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path="/order/:id" element={<Order />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/shipping" element={<ShippingAddress />} />
            <Route path="/payment" element={<PaymentOption />} />
            <Route path="/shop" element={<Home />} />
            <Route path="/" element={<NewArrivals/>} />
          </Routes>
        </Container>
        {/* <FooterComponent /> */}
        <footer className="footer text-center fw-bold">
          <span className="p-2 text-black ">
            {/* <Link to="http://github.com" className="m-3 text-black a-link">Git Repo</Link>
            <Link to="http://linkedin.com" className="m-3 text-black a-link">Linkedin</Link> */}
            <Link to="/#" className="m-3 text-black a-link">© 2023 Copyright: Arts Shop</Link>
          </span>
        </footer>
      </div>
    </BrowserRouter>
  );

}

export default App;
