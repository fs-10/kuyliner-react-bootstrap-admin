import React from "react";
import { Shop, Box, Save } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

function ButtonBar() {
  const size = 28;

  return (
    <ul className="nav nav-pills  flex-column gap-2 fw-bold ">
      <li className="nav-item">
        <NavLink
          to={"/profile"}
          className="nav-link text-dark d-flex gap-3 fs-5 "
        >
          <Shop size={size} />
          <p className="m-0">Profile</p>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to={"/products"}
          className="nav-link text-dark d-flex gap-3 fs-5"
        >
          <Box size={size} />
          <p className="m-0">Products</p>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to={"/promotion"}
          className="nav-link text-dark d-flex gap-3 fs-5"
        >
          <Save size={size} />
          <p className="m-0">Promotion</p>
        </NavLink>
      </li>
    </ul>
  );
}

export default ButtonBar;
