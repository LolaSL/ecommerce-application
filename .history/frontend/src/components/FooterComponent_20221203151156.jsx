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
              <i className="fab fa-linkedin-in" aria-hidden="true">
                <p className="inline text-xl font-mono">Linkedin</p>
              </i>
            </span>
          </Link>
        </div>
        <div class="text-center p-3" style={{background-color: rgba(0, 0, 0, 0.2);">
    © 2023 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
      </footer>
    );
  };
  export default FooterComponent;