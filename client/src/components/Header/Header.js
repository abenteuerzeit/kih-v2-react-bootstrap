import { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./img/logo.svg";
import { BsMoon, BsSun } from "react-icons/bs";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  }

  return (
    <Navbar expand="lg" className={darkMode ? "bg-dark" : "bg-light"}>
      <Container>
        <Navbar.Brand href="http://www.kulturaihistoria.umcs.lublin.pl/en/">
          <img 
            src={logo}               
            alt="Kultura i Historia logo" 
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}
            Kultura i Historia
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="http://www.kulturaihistoria.umcs.lublin.pl/en/">Home</Nav.Link>
            <Nav.Link href="http://www.kulturaihistoria.umcs.lublin.pl/pl/kultura-i-histora-nr-42-2022-2">Latest Issue</Nav.Link>
            <Nav.Link href="http://www.kulturaihistoria.umcs.lublin.pl/pl/numery">Archives</Nav.Link>
            <Nav.Link href="http://www.kulturaihistoria.umcs.lublin.pl/pl/dla-autorow">For Authors</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={handleDarkModeToggle}>
              {darkMode ? <BsSun /> : <BsMoon />}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
