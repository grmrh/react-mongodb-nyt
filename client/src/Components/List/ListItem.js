import React from "react";
import SaveBtn from '../SaveBtn'

export const ListItem = props => (
  // <div>
  // <li className="list-group-item mb-10">
  //   {props.children}
  // </li>
  // </div>

  <li class="list-group-item d-flex justify-content-between align-items-center">
    {props.children}
    <span class="badge badge-primary"><SaveBtn {...props} /></span>
  </li>
);
