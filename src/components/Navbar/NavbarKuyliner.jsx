import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LogoKuyliner from "../../assets/logo_kuyliner_2.png";

function NavbarKuyliner() {
  return (
    <Navbar expand={false} className="bg-body-tertiary mb-3 border ">
      <Container fluid>
        <div></div>
        <Navbar.Brand className="d-flex">
          <img src={LogoKuyliner} style={{ height: "45px" }} />
        </Navbar.Brand>
        <Navbar.Brand href="#">Account</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarKuyliner;
