import React from "react";

export const ListItem = props => (

  <li className="list-group-item d-flex justify-content-between align-items-center">
    {props.children}
    {/* <span className="badge badge-primary"><SaveBtn {...props} /></span> */}
  </li>
);
