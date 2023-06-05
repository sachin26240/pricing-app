import PropTypes from 'prop-types'


function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Blog
              </a>
            </li>
          </ul>
          {props.searchBar ? (
            <div>
              <button className="btn btn-outline-secondary mx-2" type="submit">
                  Login
                </button>
                <button className="btn btn-primary mx-2" type="submit">
                Sign Up
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}
export default Header;

Header.propTypes = {
  title : PropTypes.string ,
  searchBar : PropTypes.bool.isRequired
}

Header.defaultProps = {
  title : "Your Title Here",
  // searchBar : false
}
