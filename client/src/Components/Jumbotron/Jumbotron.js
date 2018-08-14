import React from "react";
import { Link } from "react-router-dom";

const Jumbotron = props => (

  <div className="jumbotron" >
    <h1 className="text-center text-warning"><strong>
          <i className="fa fa-newspaper-o"></i> {props.text}</strong>
    </h1>
    {window.location.href.endsWith("/") ? (
    <h3 className="text-center text-primary"><Link to="/saved" >To: Saved articles</Link> <i className="fa fa-arrow-right"></i></h3>
    ) : (
      <h3 className="text-center text-primary"><Link to="/" >To: Home</Link><i className="fa fa-arrow-left"></i></h3>
    )}
  </div>

);

export default Jumbotron;
