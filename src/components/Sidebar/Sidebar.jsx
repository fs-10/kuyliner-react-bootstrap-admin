import React from "react";
import ButtonBar from "../ButtonBarList/ButtonBarList";
import LogoKuyliner from "../../assets/logo_kuyliner_2.png";
import { NavLink } from "react-router-dom";
import { DoorOpen } from "react-bootstrap-icons";

function Sidebar() {
  return (
    <section
      className="d-flex flex-column flex-shrink-0 p-3 bg-light border gap-5"
      style={{ height: "100vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <img src={LogoKuyliner} style={{ width: "150px" }} alt="" />
      </a>
      <div className={"d-flex flex-column gap-5 justify-content-center"}>
        <ButtonBar />
        <NavLink to={"/login"} className="nav-link d-flex gap-3 fs-5">
          <DoorOpen size={28} />
          <p className="m-0">Log Out</p>
        </NavLink>
      </div>
    </section>
  );
}

export default Sidebar;
