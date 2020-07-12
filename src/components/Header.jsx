import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="col landingTopBg">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <a className="navbar-brand" href="/">Shiva Sharma</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <a className="nav-link" href="/"> Home <span className="sr-only">(current)</span></a> */}
              <Link className="nav-link" to="/">
              <i className="fas fa-home"></i> Home  </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/portfolio">
                <i className="fas fa-layer-group"> </i> Portfolio  </Link>
              
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/contact">
               <i className="fas fa-id-card"> </i> Contact  </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Header;