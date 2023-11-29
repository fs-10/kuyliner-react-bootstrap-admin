import React from "react";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ImageDefault from "../../assets/icon-default.png";
import {
  Envelope,
  Telephone,
  Clock,
  CalendarDate,
  GeoAlt,
} from "react-bootstrap-icons";

function Profile() {
  const sizeIcon = 28;

  return (
    <section className="m-3 p-3 border rounded-2 ">
      <h2>Profile Market</h2>
      <hr />
      <div className="row">
        <div className="col">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              className="d-flex p-2 "
              src={ImageDefault}
            />
          </Card>
        </div>
        <div className="col">
          <h3 className="mb-3">Name Market</h3>
          <p>
            <Envelope className="me-3" size={sizeIcon} />
            email@gmail.com
          </p>
          <p>
            <Telephone className="me-3" size={sizeIcon} />
            1897298173821
          </p>
          <p>
            <Clock className="me-3" size={sizeIcon} />
            08.11-21.00
          </p>
          <p>
            <CalendarDate className="me-3" size={sizeIcon} />
            Senin-Jum'at
          </p>
          <p>
            <GeoAlt className="me-3" size={sizeIcon} />
            Bandung
          </p>
        </div>
        <div className="col">
          <NavLink to={"/profile/edit"}>
            <Button variant="warning" className="text-white">
              Edit Profile
            </Button>
          </NavLink>
        </div>
      </div>
      <div className="row p-2 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7867.945351500907!2d107.82046479171726!3d-6.957284705692552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c511403730d7%3A0xf01f68bf4100acea!2sSMA%20Negeri%20Cimanggung!5e0!3m2!1sid!2sid!4v1700993456510!5m2!1sid!2sid"
          className="mt-4"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Profile;
