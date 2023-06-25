import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

import journal_data from "../_content";
import { ThemeContext } from "../ThemeContext";
import "./style.css";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  const { name, issn, classification, office, copyright, patronage } =
    journal_data;

  const footerClass = darkMode ? "footer-dark" : "footer-light";

  return (
    <footer>
      <Container className={`${footerClass}`}>
        <Row>
          <Col md={6}>
            <h5 className="mb-3">{`${name} | ISSN ${issn}`}</h5>
            <h6 className="mb-3">{office.name}</h6>
            <p>
              {office.address.street}
              <br />
              {`${office.address.postal_code}, ${office.address.city}`}
              <br />
              Editor-in-Chief:{" "}
              <Link
                to={`mailto:${journal_data.editorial_board[0].emails[0]}`}
                className="footer-link"
              >
                {journal_data.editorial_board[0].name}
              </Link>
              <br />
              ORCID:{" "}
              <Link
                to={`https://orcid.org/${journal_data.editorial_board[0].orcid}`}
              >
                {journal_data.editorial_board[0].orcid}
              </Link>
            </p>
          </Col>
          <Col md={6}>
            <h5 className="mb-3">
              Ministry of Science and Higher Education Classification
            </h5>
            <p>
              Field: {classification.field.name}
              <br />
              Disciplines: {classification.field.disciplines.join(", ")}
              <br />
              ID: {classification.id}
              <br />
              Row: {classification.lp}
              <br />
              Points Awarded: {classification.points}
            </p>
          </Col>
        </Row>
        <div
          className="border-top pt-4"
          style={{ borderColor: "#1d1d1d !important" }}
        >
          <Row>
            <Col className="text-center">
              <p className="small text-muted mb-0">
                <Image src={copyright.img_src} alt={copyright.license} />{" "}
                {new Date().getFullYear()}{" "}
                <Link to={copyright.url} className="footer-link">
                  {copyright.license}
                </Link>
              </p>
              <p className="small text-muted mb-0">Patronage: {patronage}</p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
