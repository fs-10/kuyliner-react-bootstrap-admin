import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import NavbarKuyliner from "./components/Navbar/NavbarKuyliner";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./pages/Profile/Profile";
import Product from "./pages/Product/Product";
import Promotion from "./pages/Promotion/Promotion";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={"3"} className={"p-0"}>
            <Sidebar />
          </Col>
          <Col className={"p-0"}>
            <NavbarKuyliner />
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/products" element={<Product />} />
              <Route path="/promotion" element={<Promotion />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
