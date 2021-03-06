import React from 'react';
import PropTypes from 'prop-types';
const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
        <div className="container">
          <a href="/" className="navbar-brand">
            {props.branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

Header.defaultProps = {
    branding: "My app"
}
Header.propTypes = {
    branding: PropTypes.string.isRequired
}
export default Header;
