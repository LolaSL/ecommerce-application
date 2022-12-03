import {Link} from 'react-router-dom'

const FooterComponent = () => {
    return (
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <Link to="https://github.com">
            <span className="p-2">
              <i className="fab fa-github" aria-hidden="true">
                <p className="inline text-xl font-mono">Git Repo</p>
              </i>
            </span>
          </Link>
        </div>
        <div className="m-2 text-center">
          <Link to="https://linkedin.com">
            <span className="p-2 ">
              <i className="fas fa-linkedin-square text-dark" aria-hidden="true">
                <p className="inline text-xl font-mono">Linkedin</p>
              </i>
            </span>
          </Link>
        </div>
        <div className="m-2 text-center">
          <span className="p-2">
            <i className="fas fa-copyright" aria-hidden="true">
              <p className="inline text-xl font-mono"> 2022 Arts Shop</p>
            </i>
          </span>
        </div>
      </footer>
    );
  };
  export default FooterComponent;