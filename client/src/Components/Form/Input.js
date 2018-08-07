import React from "react";

export const Input = props => (

  <div className="form-group">
    <label className="col-form-label" htmlFor="inputDefault">{props.placeholder}</label>
    <input type="text" className="form-control" {...props} id="inputDefault" />
  </div>

);
