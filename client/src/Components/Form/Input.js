import React from "react";

export const Input = props => (

  <div className="form-group">
    <label className="col-form-label" htmlFor="inputDefault">{props.children}</label>
    <input type="text" className="form-control" {...props} placeholder="" id="inputDefault" />
  </div>

);
