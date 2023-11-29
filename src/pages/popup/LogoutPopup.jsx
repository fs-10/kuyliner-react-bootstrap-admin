import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";

function LogoutPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Logout
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Are you sure you want to sign out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <NavLink to={"/login"}>
            <Button variant="danger" onClick={handleClose}>
              Yes
            </Button>
          </NavLink>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogoutPopup;
