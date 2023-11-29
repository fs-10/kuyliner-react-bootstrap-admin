import React from "react";
import ButtonBar from "../ButtonBarList/ButtonBarList";
import LogoKuyliner from "../../assets/logo_kuyliner_2.png";
import { NavLink } from "react-router-dom";
import { DoorOpen } from "react-bootstrap-icons";
import LogoutPopup from "../../pages/popup/LogoutPopup";

function Sidebar() {
  return (
    <section
      className="d-flex flex-column flex-shrink-0 p-3 bg-light border gap-5"
      style={{ height: "100vh" }}
    >
      <div className="d-flex align-items-center ms-4 mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <img src={LogoKuyliner} style={{ width: "150px" }} alt="" />
      </div>

      <div className={" d-flex flex-column gap-5 justify-content-center"}>
        <ButtonBar />
        <LogoutPopup />
      </div>
    </section>
  );
}

export default Sidebar;
