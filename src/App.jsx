import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import NavbarKuyliner from "./components/Navbar/NavbarKuyliner";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./pages/Profile/Profile";
import Product from "./pages/Product/Product";
import Promotion from "./pages/Promotion/Promotion";
import AddProduct from "./pages/Product/AddProduct";
import { Routes, Route, useNavigate } from "react-router-dom";
import AddPromotion from "./pages/Promotion/AddPromotion";
import EditProfile from "./pages/Profile/EditProfile";
import EditProduct from "./pages/Product/EditProduct";
import EditPromotion from "./pages/Promotion/EditPromotion";
import DeletePopup from "./pages/popup/DeletePopup";
import Login from "./pages/Login-Register/Login";
import Register from "./pages/Login-Register/Register";

function App() {
  const navigate = useNavigate();
  const excludeRoutes = ["/login", "/register"];
  const shouldDisplayNavbarSidebar = !excludeRoutes.includes(
    window.location.pathname
  );
  const renderNavbarSidebar = shouldDisplayNavbarSidebar && (
    <>
      <NavbarKuyliner />
      <Col xs={"2"} className={"p-0"}>
        <Sidebar />
      </Col>
    </>
  );

  return (
    <>
      <Container fluid>
        <Row>
          {renderNavbarSidebar}
          <Col className={"p-0"}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/edit" element={<EditProfile />} />
              <Route path="/products" element={<Product />} />
              <Route path="/products/add" element={<AddProduct />} />
              <Route path="/products/edit" element={<EditProduct />} />
              <Route path="/promotion" element={<Promotion />} />
              <Route path="/promotion/add" element={<AddPromotion />} />
              <Route path="/promotion/edit" element={<EditPromotion />} />
              <Route path="/delete" element={<DeletePopup />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
