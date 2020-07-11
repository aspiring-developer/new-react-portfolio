import React from 'react';

const Header = () => {
  return (
    <header className="col landingTopBg">
    <nav class="navbar navbar-expand-lg navbar-dark ">
  <a class="navbar-brand" href="/">Shiva Sharma</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav justify-content-end ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/"> Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/portfolio">Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact">Contact</a>
      </li>
      </ul>
  </div>
</nav>
    </header>
  )
}
export default Header;