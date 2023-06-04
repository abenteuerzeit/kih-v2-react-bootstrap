import React, { useState } from 'react';
import { Card, Content } from 'react-bulma-components';
import './HomePage.css';

const HomePage = () => {
  const [isCardOpen, setIsCardOpen] = useState([false, false, false]);

  const toggleCard = (index) => {
    const newIsCardOpen = [...isCardOpen];
    newIsCardOpen[index] = !newIsCardOpen[index];
    setIsCardOpen(newIsCardOpen);
  };

  const cardInfo = [
    { title: 'Aims and Scope', content: 'Kultura i Historia is an interdisciplinary journal devoted to subject matter in the humanities, aimed at addressing historical and cultural problems, while also touching on contemporary questions in the areas of cyberculture, transhumanism, or philosophy. Research topics are primarily focused on the history and culture of Central and Eastern Europe. The journal publishes scholarly articles containing theoretical, methodological and empirical research results. While the journal is addressed to academic researchers in particular, its audience is likely to include a broader scope of people interested in learning about the cultural and historical aspects of the world. The scholarly journal Kultura i Historia is published by the Institute of Cultural Studies of the Maria Curie-Skłodowska University in Lublin.' },
    { title: 'Open Access Policy', content: 'Kultura i Historia provides free and open access to its published works ( under the terms of the Creative Commons license). This policy stems from the principle that sharing research findings with a broad and diverse audience facilitates an unhindered and unimpeded exchange of knowledge.' },
    { title: 'Ethical Standards', content: 'The editorial staff of the journal follows the guidelines of the Committee on Publication Ethics. We are committed to ensuring that the publication process is conducted in accordance with the highest ethical standards. If unethical behavior is discovered, such as plagiarism, forgery of data, republication of a previously published manuscript or parts thereof, ghostwriting and guest authorship, the Editorial Board will ask the author for clarification and will take appropriate steps as foreseen in such situations, which may result in the dismissal of the article and refusal to publish it.' },
    // Add more cards as needed
  ];

  return (
    <div className="home-page">
      {cardInfo.map((info, index) => (
        <Card key={index} onClick={() => toggleCard(index)}>
          <Card.Header>
            <Card.Header.Title>{info.title}</Card.Header.Title>
          </Card.Header>
          {isCardOpen[index] && (
            <Card.Content>
              <Content>{info.content}</Content>
            </Card.Content>
          )}
        </Card>
      ))}
    </div>
  );
};

export default HomePage;
