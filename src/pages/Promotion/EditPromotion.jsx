import React from "react";
import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function EditPromotion() {
  return (
    <section className="m-3 p-3 border rounded-2 ">
      <div className="d-flex justify-content-between ">
        <h2>Edit Promotion</h2>
      </div>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name Product</Form.Label>
          <Form.Control type="text" placeholder="Rendang" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="1000" />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Image Product</Form.Label>
          <img src="" alt="" />
          <Form.Control type="file" />
        </Form.Group>
        <Form.Select aria-label="Default select example">
          <option>Category</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>

        <div className="my-3 d-flex gap-2 justify-content-end ">
          <NavLink to={"/promotion"}>
            <Button variant="danger">Cancel</Button>
          </NavLink>
          <Button>Save</Button>
        </div>
      </Form>
    </section>
  );
}

export default EditPromotion;
