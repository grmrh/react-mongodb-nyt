import React from "react";
import { Link } from "react-router-dom";

<<<<<<< HEAD
export const Jumbotron = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron"
  >
    {children}
=======
const Jumbotron = props => (

  <div className="jumbotron" >
    <h1 className="text-center text-warning"><strong>
          <i className="fa fa-newspaper-o"></i> {props.text}</strong>
    </h1>
    {window.location.href.endsWith("/") ? (
    <h3 className="text-center text-primary"><Link to="/saved" >Saved articles <i className="fa fa-arrow-right"></i></Link></h3>
    ) : (
      <h3 className="text-center text-primary"><Link to="/" ><i className="fa fa-arrow-left"></i> Back to Home</Link></h3>
    )}
>>>>>>> c95549690f7f42923e26565222a56a909c31d375
  </div>

);

