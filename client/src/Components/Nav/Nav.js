import React from "react";

const Nav = () => (
  // <nav className="navbar navbar-expand-lg navbar-light text-light bg-dark ">
  //   <a className="navbar-brand">
  //     The Real Doctors - this is navbar
  //   </a>
  // </nav>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand text-light" href="/">The Real Doctors - this is navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor02">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/doctorspost">Blog <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/detail">Detail</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/signup">Signup</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="login" />
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">login</button>
    </form>
  </div>
</nav>

);

export default Nav;
