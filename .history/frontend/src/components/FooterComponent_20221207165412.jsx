import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer className="footer bg-dark text-center text-white pt-2">
      <div class="footer-content">
        <ul class="socials">
          <Link to="https://github.com" className="m-3">
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
          </Link>
          <span className="p-2 text-white">© 2023 Copyright: </span>
          <Link to="/#" className="m-3 text-white a-link">
            {" "}
            Arts Shop  
          </Link><Link to="#">Arts Shop</Link>
        </ul>
      </div>
      <div class="footer-menu">
        <ul class="f-menu">
          <Link to="#">New Arrivals</Link>
        
        </ul>
      </div>
    </footer>
  );
};
export default FooterComponent;
