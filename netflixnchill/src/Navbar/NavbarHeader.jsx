import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Navbar.css";

function NavbarHeader() {
  const flaguser = localStorage.getItem("flaguser");
  const typeuser = localStorage.getItem("typeuser");
  const handleLogout = () => {
    localStorage.removeItem("flaguser");
    localStorage.removeItem("typeuser");
    window.location.href = "/user/signin";
  };
  return (
    <>
      <Navbar
        bg="#222"
        expand="lg"
        className="navbarHeader"
        style={{ backgroundColor: "#222" }}
      >
        <Container>
          <NavLink className="nav-link " aria-current="page" to="/">
            <Navbar.Brand>
              <a href="http://localhost:3000/" style={{textDecoration: "none"}}>
                <img
                  className="logo-brand"
                  src="https://firebasestorage.googleapis.com/v0/b/netflixsource-75bc5.appspot.com/o/images%2Fnetflix_official_logo_icon_168085.png?alt=media&token=7979102b-c688-4b4a-a825-22e2e6b791a5"
                ></img>
              </a>
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <li className="nav-item ">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li> */}
              {flaguser && (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link custom-link"
                      aria-current="page"
                      to="/movie"
                    >
                      Phim đã xem
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/mymovie"
                    >
                      Danh sách của tôi
                    </NavLink>
                  </li>
                </>
              )}

              {typeuser === "admin" && (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/user/admin/users"
                  >
                    Admin
                  </NavLink>
                </li>
              )}
            </Nav>
            
            <div className="buttonUser">
              {flaguser ? (
                <>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={`Xin chào ${flaguser}`}
                  >
                    <Dropdown.Item href="#/action-1">Setting</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <Button variant="outline-danger" onClick={handleLogout}>
                        Đăng xuất
                      </Button>
                    </Dropdown.Item>
                  </DropdownButton>
                </>
              ) : (
                <>
                  <Link to="/user/signin">
                    <Button variant="outline-primary">Đăng nhập</Button>
                  </Link>
                  <Link to="/user/signup">
                    <Button variant="outline-success">Đăng ký</Button>
                  </Link>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHeader;
