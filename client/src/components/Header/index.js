import { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import logo from "./img/logo.svg";
import { BsMoon, BsSun } from "react-icons/bs";
import { ThemeContext } from "../ThemeContext/ThemeContext";

function Header() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Toggle {darkMode ? "Light" : "Dark"} Mode
    </Tooltip>
  );

  return (
    <Navbar expand="lg" className={darkMode ? "bg-dark" : "bg-light"}>
      <Container fluid>
        <Navbar.Brand href="http://www.kulturaihistoria.umcs.lublin.pl/en/">
          <img
            src={logo}
            alt="Kultura i Historia logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="http://www.kulturaihistoria.umcs.lublin.pl/en/">
              Home
            </Nav.Link>
            <Nav.Link href="http://www.kulturaihistoria.umcs.lublin.pl/pl/kultura-i-histora-nr-42-2022-2">
              Latest Issue
            </Nav.Link>
            <Nav.Link href="http://www.kulturaihistoria.umcs.lublin.pl/pl/numery">
              Archives
            </Nav.Link>
            <Nav.Link href="http://www.kulturaihistoria.umcs.lublin.pl/pl/dla-autorow">
              For Authors
            </Nav.Link>
          </Nav>
          <Nav>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Nav.Link onClick={toggleDarkMode}>
                {darkMode ? <BsSun /> : <BsMoon />}
              </Nav.Link>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
