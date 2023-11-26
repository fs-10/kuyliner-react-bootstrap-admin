import React from "react";
import { Shop, Box, Save } from "react-bootstrap-icons";

function ButtonBar() {
  const size = 28;

  return (
    <ul className="nav nav-pills flex-column gap-2 fw-bold ">
      <li className="nav-item">
        <a href="#" className="nav-link d-flex gap-3 fs-5 active">
          <Shop size={size} />
          <p className="m-0">Profile</p>
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link d-flex gap-3 fs-5">
          <Box size={size} />
          <p className="m-0">Products</p>
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link d-flex gap-3 fs-5">
          <Save size={size} />
          <p className="m-0">Promotion</p>
        </a>
      </li>
    </ul>
  );
}

export default ButtonBar;
