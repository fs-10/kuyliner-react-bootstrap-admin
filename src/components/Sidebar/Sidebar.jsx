import React from "react";
import ButtonBar from "../ButtonBarList/ButtonBarList";
import LogoKuyliner from "../../assets/logo_kuyliner_2.png";

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
          <img src={LogoKuyliner} style={{width: "150px"}} alt="" />
      </a>
      <ButtonBar />
    </section>
  );
}

export default Sidebar;
