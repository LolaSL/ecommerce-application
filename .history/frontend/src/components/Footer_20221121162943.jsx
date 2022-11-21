const Footer = () => {
    return (
      <footer className="footer  navbar-fixed-bottom d-flex justify-content-center p-4 mb-0">
        <div className="m-2 text-center ">
          <a href="https://github.com">
            <span className="p-2">
            < class="fa-brands fa-square-github" aria-hidden="true"></
                <p className="inline text-xl font-mono">Git Repo</p>
              </i>
            </span>
          </a>
        </div>
        <div className="m-2 text-center">
          <a href="https://linkedin.com">
            <span className="p-2 ">
              <i className="fas fa-linkedin-square text-dark" aria-hidden="true">
                <p className="inline text-xl font-mono">Linkedin</p>
              </i>
            </span>
          </a>
        </div>
        <div className="m-2 text-center">
          <span className="p-2">
            <i className="fas fa-copyright text-dark" aria-hidden="true">
              <p className="inline text-xl font-mono"> 2022 Arts Shop</p>
            </i>
          </span>
        </div>
      </footer>
    );
  };
  export default Footer;