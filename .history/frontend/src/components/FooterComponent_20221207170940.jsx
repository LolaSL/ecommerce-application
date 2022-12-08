import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';

const FooterComponent = () => {
  return (
    <footer className="footer bg-dark text-center text-white pt-2">
      <div class="footer-content">
        <ul class="socials">
        <SocialIcon url="https://guthub.com/jaketrent" />

          {/* <Link to="https://github.com" className="m-3">
            <span className="text-white ">
              <i className="fab fa-github mt-2" aria-hidden="true">
                <p className="inline text-xl font-mono">Git Repo</p>
              </i>
            </span>
          </Link>
          <Link to="https://linkedin.com" className="m-3">
            <span className="p-2 text-white">
              <i className="fab fa-linkedin-in" aria-hidden="true">
                <p className="inline text-xl font-mono">Linkedin</p>
              </i>
            </span>
          </Link> */}
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
