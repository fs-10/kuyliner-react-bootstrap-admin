import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LogoKuyliner from "../../assets/logo_kuyliner_2.png";
import IconDefault from "../../assets/icon-default.png";

function NavbarKuyliner() {
  return (
    <Navbar expand={false} className="bg-body-tertiary mb-3 border ">
      <Container fluid>
        <div></div>
        <Navbar.Brand className="d-flex">
          <img src={LogoKuyliner} style={{ height: "45px" }} />
        </Navbar.Brand>
        <Navbar.Brand href="#" className="d-flex gap-3 align-items-center ">
          <img src={IconDefault} style={{width: 40}} alt="" />
          <h4 className="m-0 ">Account</h4>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarKuyliner;
