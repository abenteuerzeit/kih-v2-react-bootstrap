import React from "react";
import { Tab, Tabs, Card, Container, Row, Col } from "react-bootstrap";
import journal_data from "../../content/index";
import aboutJournal from "../../content/about";

const PersonCard = ({ title, people }) => (
  <Col sm={6} md={4} lg={3}>
    <Card>
      <Card.Header>
        <Card.Title>{title}</Card.Title>
      </Card.Header>
      <Card.Body>
        {people.map((person, index) => (
          <Card.Text key={index}>{person.name}</Card.Text>
        ))}
      </Card.Body>
    </Card>
  </Col>
);

const HomePage = () => {
  const { editorial_board, advisory_board, reviewers } = journal_data;

  const people = [
    { title: "Editorial Board", people: editorial_board },
    { title: "Advisory Board", people: advisory_board },
    { title: "Reviewers", people: reviewers },
  ];

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
                <Card>
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
            {people.map((info, index) => (
              <PersonCard key={index} {...info} />
            ))}
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default HomePage;
