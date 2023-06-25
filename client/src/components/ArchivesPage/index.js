import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

function ArchivesPage() {
  const archivesData = [
    {
      year: 2022,
      archives: [
        { 
            volume: 41, 
            issue: 1,
            url: "http://www.kulturaihistoria.umcs.lublin.pl/pl/kultura-i-histora-nr-41-2022-1" },
      ]
    }
  ];

  return (
    <Container>
      <h1>Archives</h1>
      {archivesData.map((yearData) => (
        <div key={yearData.year}>
          <strong>{yearData.year}</strong>
          <ListGroup>
            {yearData.archives.map((archive) => (
              <ListGroup.Item key={archive.url}>
                <a href={archive.url} target="_blank" rel="noopener noreferrer">
                  KiH {archive.volume}({archive.issue})
                </a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      ))}
    </Container>
  );
}

export default ArchivesPage;
