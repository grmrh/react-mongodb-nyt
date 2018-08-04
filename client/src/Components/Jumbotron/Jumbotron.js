import React from "react";

const Jumbotron = props => (

  <div className="jumbotron" >
    <h1 className="text-center"><strong>
          <i className="fa fa-newspaper-o"></i> {props.text}</strong>
    </h1>
  </div>

);

export default Jumbotron;
