import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer className="footer bg-dark text-center text-white pt-2">
      <div class="footer-content">
        <ul class="socials">
         ?
          <Container
            className="rights py-2"
            style={{ color: "white", textAlign: "center" }}
          >
            &copy; {new Date().getFullYear()} Copyright: Arts Shop. All Rights
            Reserved
          </Container>
          <Link to="/#" className="m-3 text-white a-link">
            {" "}
            New Arrivals
          </Link>
          <Link to="/shop" className="m-3 text-white a-link">
            Arts Shop
          </Link>
        </ul>
      </div>
    </footer>
  );
};
export default FooterComponent;
