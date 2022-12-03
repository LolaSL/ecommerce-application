import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer className=" bg-dark text-center text-white pt-2">
 
        <Link to="https://github.com" className="m-3">
          <span className="p-2 text-white mt-2">
            <i className="fab fa-github" aria-hidden="true">
              <p className="inline text-xl font-mono">Git Repo</p>
            </i>
          </span>
        </Link>
      {/* </div> */}
      {/* <div className="m-2 text-center"> */}
        <Link to="https://linkedin.com" className="m-3">
          <span className="p-2 text-white">
            <i className="fab fa-linkedin-in" aria-hidden="true">
              <p className="inline text-xl font-mono">Linkedin</p>
            </i>
          </span>
        </Link>
      {/* </div> */}
      {/* <div class=" m-2 text-center p-3"> */}
        © 2023 Copyright:
        <Link to="/#" className="m-3 text-white a-link">
          {" "}
          Art Shop
        </Link>
        {/* </div> */}
      {/* </div> */}
    </footer>
  );
};
export default FooterComponent;
