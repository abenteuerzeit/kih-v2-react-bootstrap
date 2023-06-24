// // Header.js
// import React, { useState } from "react";
// import "./Header.css";
// import logo from "../../static/logo-long.svg";

// const Header = () => {
//   return (
//     <nav class="navbar navbar-expand-lg bg-body-tertiary">
//       <div class="container-fluid">
//         <a
//           class="navbar-brand"
//           href="http://www.kulturaihistoria.umcs.lublin.pl/en/"
//         >
//           <img src={logo} className="logo" alt="Kultura i Historia logo" />
//         </a>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//             <li class="nav-item">
//               <a
//                 class="nav-link active"
//                 aria-current="page"
//                 href="http://www.kulturaihistoria.umcs.lublin.pl/en/"
//               >
//                 Home
//               </a>
//             </li>
//             <li class="nav-item">
//               <a
//                 class="nav-link"
//                 href="http://www.kulturaihistoria.umcs.lublin.pl/pl/kultura-i-histora-nr-42-2022-2"
//               >
//                 Latest Issue
//               </a>
//             </li>
//             <li class="nav-item">
//               <a
//                 class="nav-link"
//                 href="http://www.kulturaihistoria.umcs.lublin.pl/pl/numery"
//               >
//                 Archives
//               </a>
//             </li>
//             <li class="nav-item">
//               <a
//                 class="nav-link"
//                 href="http://www.kulturaihistoria.umcs.lublin.pl/pl/dla-autorow"
//               >
//                 For Authors
//               </a>
//             </li>
//           </ul>
//           <form class="d-flex" role="search">
//             <input
//               class="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button class="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;