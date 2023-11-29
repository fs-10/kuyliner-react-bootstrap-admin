import React from "react";
import { Table, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import DeletePopup from "../popup/DeletePopup";

function Promotion() {
  return (
    <section className="m-3 p-3 border rounded-2 ">
      <div className="d-flex justify-content-between ">
        <h2>Promotion</h2>
        <NavLink to={"/promotion/add"}>
          <Button>Add Promotion</Button>
        </NavLink>
      </div>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Name Kuliner</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td className="d-flex justify-content-center gap-2 ">
              <NavLink to={"/promotion/edit"}>
                <Button variant="warning">Edit</Button>
              </NavLink>
              <DeletePopup />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td className="d-flex justify-content-center gap-2 ">
              <NavLink to={"/promotion/edit"}>
                <Button variant="warning">Edit</Button>
              </NavLink>
              <DeletePopup />
            </td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
}

export default Promotion;
