import React from "react";
import { Table, Image, Button } from "react-bootstrap";

function Promotion() {
  return (
    <section className="m-3 p-3 border rounded-2 ">
      <div className="d-flex justify-content-between ">
        <h2>Promotion</h2>
        <Button>Add Promotion</Button>
      </div>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Name Kuliner</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
}

export default Promotion;
