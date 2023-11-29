import React from "react";
import { NavLink } from "react-router-dom";
import LogoKuyliner from "../../assets/logo_kuyliner_2.png";

function Register() {
  return (
    <section className="login template d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="40-w p-5 border border-3 rounded-4 border-secondary-subtle bg-white">
        <form action="">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <img src={LogoKuyliner} style={{ height: "45px" }} />
            <h5 className="m-0">Partner</h5>
          </div>
          <h3 className="mb-3 text-center">Sign Up</h3>
          <div className="d-flex justify-content-center">
            <p>Already have an account?</p>
            <NavLink to={"/login"}>
              <p className="ms-1 text-warning text-decoration-none">Login</p>
            </NavLink>
          </div>
          <div className="mb-3">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Konfirmasi Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
          <NavLink to={"/login"}>
            <button className="btn btn-warning">Sign In</button>
          </NavLink>
        </form>
      </div>
    </section>
  );
}

export default Register;
