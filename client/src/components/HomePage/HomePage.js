import React from "react";
import { Tab, Tabs, Card, Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  const aboutJournal = [
    {
      title: "Aims and Scope",
      content: "Kultura i Historia is an interdisciplinary journal...",
    },
    {
      title: "Open Access Policy",
      content: "Kultura i Historia provides free and open access...",
    },
    {
      title: "Ethical Standards",
      content: "The editorial staff of the journal follows the guidelines...",
    },
    {
      title: "Data Privacy Policy / GDPR",
      content: "Please note that all personal data...",
    },
  ];

  const people = [
    { title: "Editorial Board", content: "" },
    { title: "Advisory Board", content: "" },
    { title: "Reviewers", content: "" },
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
                    <Card.Title>{info.title}</Card.Title></Card.Header>
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
              <Col sm={6} md={4} lg={3} key={index}>
                <Card>
                  <Card.Header><Card.Title>{info.title}</Card.Title></Card.Header>
                  <Card.Body>
                    <Card.Text>{info.content}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default HomePage;
