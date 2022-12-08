import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';

const FooterComponent = () => {
  return (
    <footer className="footer bg-dark text-center text-white pt-2">
      <div className="footer-content">
        <ul className="socials">
        <SocialIcon  url="https://github.com/feed" className="me-2" style={{ height: 25, width: 25 }}/>
          <SocialIcon url="https://linkedin.com" className="me-2 " style={{ height: 25, width: 25 }} />
          <Link to="/#" className="m-3 text-white a-link">
            {" "}
            New Arrivals
          </Link>
          <Link to="/shop" className="m-3 text-white a-link">
            Arts Shop
          </Link>
          <Container
            className="rights py-2"
            style={{ color: "white", textAlign: "center" }}
          >
            &copy; {new Date().getFullYear()} Copyright: Arts Shop. All Rights
            Reserved
          </Container>
       
        </ul>
      </div>
    </footer>
  );
};
export default FooterComponent;
