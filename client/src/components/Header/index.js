import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import logo from "../_content/logo.svg";
import logo_dark from "../_content/logo_dark.svg";
import { BsMoon, BsSun } from "react-icons/bs";
import { ThemeContext } from "../ThemeContext";
import { Link } from "react-router-dom"; // import Link from react-router-dom

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
            src={darkMode ? logo_dark : logo}
            alt="Kultura i Historia logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/articles" className="nav-link">
              Latest Issue
            </Link>
            <Link to="/archives" className="nav-link">
              Archives
            </Link>
            <Link to="/author-guidelines" className="nav-link">
              For Authors
            </Link>
          </Nav>
          <Nav>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Nav.Link onClick={toggleDarkMode}>
                {!darkMode ? <BsSun /> : <BsMoon />}
              </Nav.Link>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
