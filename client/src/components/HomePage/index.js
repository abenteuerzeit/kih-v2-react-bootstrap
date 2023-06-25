import React, { useContext } from "react";
import {
  Tab,
  Tabs,
  Card,
  Container,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";
import { ThemeContext } from "../ThemeContext";

import journal_data from "../_content";
import aboutJournal from "../_content/about";

const PersonCard = ({ title, people }) => {
  const { darkMode } = useContext(ThemeContext);

  

  return (
    <Col sm={6} md={8} lg={6}>
      <Card
        className="h-100"
        bg={darkMode ? "dark" : "light"}
        text={darkMode ? "white" : "dark"}
      >
        <Card.Header>
          <Card.Title>{title}</Card.Title>
        </Card.Header>
        <Card.Body className="d-flex flex-column">
          {people.map((person, index) => (
            <div key={index} className="mb-2">
              <Card.Title>{person.display_name || person.name}</Card.Title>
              {person.title && (
                <Card.Subtitle className="mb-2 text-muted">
                  {person.title}
                </Card.Subtitle>
              )}
              {person.role && <Card.Text>{person.role}</Card.Text>}
              {person.emails &&
                person.emails.map((email, index) => (
                  <Card.Link key={index} href={`mailto:${email}`}>
                    {email}
                  </Card.Link>
                ))}
            </div>
          ))}
        </Card.Body>
      </Card>
    </Col>
  );
};

const PersonList = ({ title, people }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <Col sm={6} md={4} lg={3}>
      <Card
        className="h-100"
        data-bs-theme={darkMode ? "dark" : "light"}
        bg={darkMode ? "dark" : "light"}
        text={darkMode ? "white" : "dark"}
      >
        <Card.Header>
          <Card.Title>{title}</Card.Title>
        </Card.Header>
        <ListGroup variant="flush" className="d-flex flex-column">
          {people.map((person, index) => (
            <ListGroup.Item key={index}>
              {person.name}, {person.iso_country_code}{" "}
              {person.title && ` ${person.title}`}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </Col>
  );
};



const HomePage = () => {
  const { darkMode } = useContext(ThemeContext);
  const { editorial_board, advisory_board, reviewers } = journal_data;

  return (
    <Container>
      <Tabs
        defaultActiveKey="aboutJournal"
        id="uncontrolled-tab-example"
        className="mb-3"
        fill
        justify
        transition
      >
        <Tab eventKey="aboutJournal" title="About the Journal">
          <Row xs={1} md={2} className="g-4">
            {aboutJournal.map((info, index) => (
              <Col sm={6} md={4} lg={3} key={index}>
                <Card
                  className={`h-100 ${
                    darkMode ? "bg-dark text-white" : "bg-light text-dark"
                  }`}
                >
                  {" "}
                  <Card.Header>
                    <Card.Title>{info.title}</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>{info.content}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>
        <Tab eventKey="people" title="People">
          <Row xs={1} md={2} className="g-4">
            <PersonCard title="Editorial Board" people={editorial_board} />
            <PersonList title="Advisory Board" people={advisory_board} />
            <PersonList title="Reviewers" people={reviewers} />
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default HomePage;
