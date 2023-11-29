import React from "react";
import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function EditProfile() {
  return (
    <section className="m-3 p-3 border rounded-2 ">
      <div className="d-flex justify-content-between ">
        <h2>Edit Profile</h2>
      </div>
      <hr />
      <Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Image Profile</Form.Label>
          <img src="" alt="" />
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name Market</Form.Label>
          <Form.Control type="text" placeholder="Rendang" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="085633445522" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Open at</Form.Label>
          <Form.Control type="number" placeholder="085633445522" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Location</Form.Label>
          <Form.Control type="number" placeholder="085633445522" />
        </Form.Group>

        <div className="my-3 d-flex gap-2 justify-content-end ">
          <NavLink to={"/profile"}>
            <Button variant="danger">Cancel</Button>
          </NavLink>
          <Button>Save</Button>
        </div>
      </Form>
    </section>
  );
}

export default EditProfile;
