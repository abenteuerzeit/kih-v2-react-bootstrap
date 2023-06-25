import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./style.css";

const News = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Call for Papers</Accordion.Header>
        <Accordion.Body>
            If you would like to publish an article in the next issue of Kultura
            i Historia, please familiarize yourself with the guidelines for
            authors where the formal requirements for a paper are specified.
            However, due to the high number of submissions, the editorial staff
            of KiH will only respond to articles that have successfully passed
            our editorial and peer-review procedures. Please send submissions
            to: czasopismokulturaihistoria@gmail.com
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default News;
