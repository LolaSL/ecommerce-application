import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import { Store } from "./Store";
import Cart from "./pages/Cart.jsx";
import SignIn from "./pages/SignIn.jsx";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import ShippingAddress from "./pages/ShippingAdress.jsx";
import SingUp from "./pages/SignUp.jsx";
import PaymentOption from "./pages/PaymentOption.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Order from "./pages/Order.jsx";
import Orders from "./pages/Orders.jsx";
import Profile from "./pages/Profile.jsx";
import NewArrivals from "./pages/NewArrivals..jsx";
import SearchBar from "./components/SeachBar.jsx";
import SearchResult from "./pages/SearchResult.jsx";
import Button from "react-bootstrap/Button";
import { SocialIcon } from "react-social-icons";
import AuthRoutes from "./components/AuthRoutes.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import OrderList from "./pages/OrderList.jsx";
import UserList from "./pages/UserList.jsx";
import ProductList from "./pages/ProductList";
import ProductEdit from "./pages/ProductEdit";
import UserEdit from "./pages/UserEdit.jsx";
import Map from "./pages/Map.jsx";
import Events from "./pages/Events.jsx";
import EventEdit from "./pages/EventEdit";
import EventList from "./pages/EventList";
import NotFound from "./pages/NotFound.jsx";
import AboutArtsShop from "./pages/AboutArtsShop.jsx";
import Education from "./components/Education.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import PrivatePlolicy from "./pages/PrivatePlolicy.jsx";



function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { fullBox, cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentOption");
    window.location.href = "/signin";
  };
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? fullBox
              ? "site-container active-cont d-flex flex-column full-box"
              : "site-container active-cont d-flex flex-column"
            : fullBox
            ? "site-container d-flex flex-column active-cont"
            : "site-container d-flex flex-column"
        }
      >
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar className="navbar nav" bg="black" variant="dark" expand="lg">
            <Container className="container">
              <Button
                className="me-4"
                variant="dark"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <i className="fas fa-bars"></i>
              </Button>
              <Link className="a-link me-2" to="/" rel="noopener noreferrer">
                <Navbar.Brand>New Arrivals</Navbar.Brand>
              </Link>
              <Link
                className="a-link text-white"
                to="/shop"
                rel="noopener noreferrer"
              >
                Arts Shop
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <SearchBar />
                <Nav className="me-auto w-100 justify-content-end">
                  <Link to="/cart" className="nav-link">
                    Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
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
                      Sign In
                    </Link>
                  )}
                  {userInfo && userInfo.isAdmin && (
                    <NavDropdown title="Admin" id="admin-nav-dropdown">
                      <LinkContainer to="/admin/dashboard">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/products">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/orders">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/events">
                        <NavDropdown.Item>Events</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/users">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <div
          className={
            sidebarIsOpen
              ? "active-nav side-navbar d-flex justify-content-between flex-wrap flex-column"
              : "side-navbar d-flex justify-content-between flex-wrap flex-column"
          }
        >
          <Nav className="flex-column text-white w-100 pt-4">
            <Nav.Item className="m-3 ">
              <SocialIcon
                url="https://linkedin.com"
                className="me-2 social"
                style={{ height: 25, width: 25 }}
              />
              Linkedin
            </Nav.Item>
            <Nav.Item className="m-3 ">
              <SocialIcon
                url="https://github.com/"
                className="me-2 social"
                style={{ height: 25, width: 25 }}
              />
              Github
            </Nav.Item>
            <Link to="/#" className="m-3 text-white a-link">
              {" "}
              New Arrivals
            </Link>
            <Link to="/shop" className="m-3 text-white a-link">
              Arts Shop
            </Link>
            <Link to="/search" className="m-3 text-white a-link">
              Find your Arts
            </Link>
            <Link to="/events" className="m-3 text-white a-link">
              Events
            </Link>
            <Link to="/education" className="m-3 text-white a-link">
              Education
            </Link>
            <Link to="/about_arts_shop" className="m-3 text-white a-link">
              About Arts Shop
            </Link>
            <Link to="/terms_of_service" className="m-3 text-white a-link">
              Terms of Service
            </Link>
            <Link to="/private_policy" className="m-3 text-white a-link">
             Private Plolicy
            </Link>
          </Nav>
        </div>

        <main>
          <Container className="mt-4 ">
            <Routes>
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/search" element={<SearchResult />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SingUp />} />
              <Route
                path="/profile"
                element={
                  <AuthRoutes>
                    <Profile />
                  </AuthRoutes>
                }
              />
              <Route
                path="/map"
                element={
                  <AuthRoutes>
                    <Map />
                  </AuthRoutes>
                }
              />
              <Route path="/placeorder" element={<PlaceOrder />} />
              <Route
                path="/order/:id"
                element={
                  <AuthRoutes>
                    <Order />
                  </AuthRoutes>
                }
              />
              <Route
                path="/orders"
                element={
                  <AuthRoutes>
                    <Orders />
                  </AuthRoutes>
                }
              />
              <Route path="/shipping" element={<ShippingAddress />} />
              <Route path="/payment" element={<PaymentOption />} />
              <Route path="/shop" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/education" element={<Education />} />
              <Route path="/about_arts_shop" element={<AboutArtsShop />} />
              <Route path="/terms_of_service" element={<TermsOfService />} />
              <Route path="/private_policy" element={<Privat />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <Dashboard />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/orders"
                element={
                  <AdminRoute>
                    <OrderList />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UserList />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/products"
                element={
                  <AdminRoute>
                    <ProductList />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/product/:id"
                element={
                  <AdminRoute>
                    <ProductEdit />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/events"
                element={
                  <AdminRoute>
                    <EventList />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/event/:id"
                element={
                  <AdminRoute>
                    <EventEdit />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/user/:id"
                element={
                  <AdminRoute>
                    <UserEdit />
                  </AdminRoute>
                }
              ></Route>
              <Route path="/" element={<NewArrivals />} />
            </Routes>
          </Container>
        </main>
        <footer className="text-center">
          <div className="text-bold mb-4">
            {" "}
            &copy; {new Date().getFullYear()} Copyright: Arts Shop
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
