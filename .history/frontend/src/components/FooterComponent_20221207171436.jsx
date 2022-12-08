import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';

const FooterComponent = () => {
  return (
    <footer className="footer bg-dark text-center text-white pt-2">
      <div class="footer-content">
        <ul class="socials">
        <SocialIcon url="https://guthub.com/jaketrent" className="me-2 small-icons"/>
        <SocialIcon url="https://linkedin.com" className="me-2 small-icons"/>
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
