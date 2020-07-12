import React from 'react';

const Header = () => {
  return (
    <header className="col landingTopBg">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <a className="navbar-brand" href="/">Shiva Sharma</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav justify-content-end ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/"> Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Header;