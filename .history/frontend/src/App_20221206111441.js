import React, { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import 'react-toastify/dist/ReactToastify.css'
import {  ToastContainer } from 'react-toastify';
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
// import axios from 'axios';
// import { getError } from './utils';
import SearchBar from './components/SeachBar.jsx';
import SearchResult from './pages/SearchResult.jsx';
import FooterComponent from './components/FooterComponent.jsx'


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
  // const [sidebarIsOpen, setSidebarIsOpen] = useState(false)


  return (
    <BrowserRouter>
      <div>
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar className="navbar nav" bg="black" variant="dark" expand="lg">
            <Container className="container">
              <Link className="a-link" to="/" rel="noopener noreferrer">
                <Navbar.Brand>New Arrivals</Navbar.Brand>
              </Link>
              <Link className="a-link text-white" to="/shop" rel="noopener noreferrer">
                Arts Shop
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <SearchBar />
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
        <div>
          <Nav className="flex-column text-white w-100 p-2">
            {/* <Nav.Item>
              <strong>Categories</strong>
            </Nav.Item> */}
            {/* {categories.map((category) => (
              <Nav.Item key={category}>
                <Link
                  to={`/search?category=${category}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link>{category}</Nav.Link>
                </Link>
              </Nav.Item>
            ))} */}
          </Nav>
        </div>
        <main>
          <Container className="mt-4 ">
            <Routes >
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/search" element={<SearchResult />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SingUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/placeorder" element={<PlaceOrder />} />
              <Route path="/order/:id" element={<Order />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/shipping" element={<ShippingAddress />} />
              <Route path="/payment" element={<PaymentOption />} />
              <Route path="/shop" element={<Home />} />
              <Route path="/" element={<NewArrivals />} />
            </Routes>
          </Container>
        </main>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );

}

export default App;
