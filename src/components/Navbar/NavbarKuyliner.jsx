import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LogoKuyliner from "../../assets/logo_kuyliner_2.png";
import IconDefault from "../../assets/icon-default.png";
import { NavLink } from "react-router-dom";

function NavbarKuyliner() {
  return (
    <Navbar expand={false} className="bg-body-tertiary mb-3 border ">
      <Container fluid>
        <div></div>
        <Navbar.Brand className="d-flex align-items-center">
          <img src={LogoKuyliner} style={{ height: "45px" }} />
          <h5 className="m-0">Partner</h5>
        </Navbar.Brand>
        <NavLink
          to={"/"}
          className="d-flex gap-3 align-items-center text-decoration-none text-black"
        >
          <img src={IconDefault} style={{ width: 40 }} alt="" />
          <h4 className="m-0">Account</h4>
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default NavbarKuyliner;
