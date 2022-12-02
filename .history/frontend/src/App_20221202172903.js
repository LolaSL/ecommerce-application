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
import Orders from './pages/Orders.jsx';
import Profile from './pages/Profile.jsx';




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
      < PayPalScriptProvider deferLoading={true} options={{"client-id": "AWZuxUdbnw9n6oTMvRzPpPUlzosk58NW9EeRtu1rO2bOP0VVeiQojtisLfqH2oGFm355k-qcjfVODZJC"}}> 
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header className="header">
          <Navbar className="navbar nav" bg="dark" variant="dark" expand="lg">
            <Container className="container">
              <Link className="link" to="/" rel="noopener noreferrer">
                <Navbar.Brand>Arts Shop</Navbar.Brand>
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
        < PayPalScriptProvider deferLoading={true} options={{"client-id": "AWZuxUdbnw9n6oTMvRzPpPUlzosk58NW9EeRtu1rO2bOP0VVeiQojtisLfqH2oGFm355k-qcjfVODZJC"}}> 
        <App />
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
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
        {/* <Footer /> */}
        <footer className=" footer text-center fw-bold">
          All right reserved
        </footer>
        </ PayPalScriptProvider deferLoading={true} options={{"client-id": "AWZuxUdbnw9n6oTMvRzPpPUlzosk58NW9EeRtu1rO2bOP0VVeiQojtisLfqH2oGFm355k-qcjfVODZJC"}}> 
        </div>
        
    </BrowserRouter>
  );

}

export default App;
