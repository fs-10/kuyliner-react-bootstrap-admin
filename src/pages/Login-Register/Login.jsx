import React from "react";
import { NavLink } from "react-router-dom";
import LogoKuyliner from "../../assets/logo_kuyliner_2.png";

function Login() {
  return (
    <section className="login template d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="40-w p-5 border border-3 rounded-4 border-secondary-subtle bg-white">
        <form action="">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <img src={LogoKuyliner} style={{ height: "45px" }} />
            <h5 className="m-0">Partner</h5>
          </div>
          <h3 className="mb-3 text-center">Sign in</h3>
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
          <div className="d-grid">
            <NavLink to={"/promotion"}>
              <button className="btn btn-warning">Sign In</button>
            </NavLink>
            <div className="d-flex justify-content-center mt-3">
              <p>Don't have an account yet?</p>
              <NavLink to={"/register"}>
                <p className="ms-1 text-warning">Create one</p>
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
