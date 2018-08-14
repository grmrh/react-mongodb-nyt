import React from "react";
import './Footer.css'

const Footer = () => (
    <footer className="footer text-center fixed-bottom">
    <div className="container">
      <span className="text-muted">New York Times    
        Copyright &copy; {(new Date().getFullYear())}
        </span>
    </div>
  </footer>
);

export default Footer;
