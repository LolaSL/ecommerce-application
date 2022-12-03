import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer className=" bg-dark text-center text-white pt-2 ">
      <Link to="https://github.com" className="m-3">
        <span className="p-2 text-white ">
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
        Art Shop
      </Link>
    </footer>
  );
};
export default FooterComponent;
