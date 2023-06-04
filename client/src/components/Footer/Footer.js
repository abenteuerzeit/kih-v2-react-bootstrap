// Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (

      <footer >
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="footer-heading">Kultura i Historia</div>
              <small>
                ISSN 1642-9826
                <br />
                Kultura i Historia została pozytywnie zweryfikowana przez MEiN
                otrzymując 20 punktów (zob. Lista czasopism)
              </small>
            </div>
            <div className="column">
              <div className="footer-heading">Instytut Nauk o Kulturze</div>
              <small>
                UMCS
                <br />
                plac Marii Curie-Skłodowskiej 4
                <br />
                20-031 Lublin
                <br />
                pod patronatem lubelskiego Oddziału PTK
              </small>
            </div>
            <div className="column">
              <div className="footer-heading">Editor-in-Chief</div>
              <small>
                dr hab. Andrzej Radomski, Prof. UMCS
                <br />
                ORCID: 0000-0002-1735-605X
                <br />
                <a href="mailto:andrzej.radomski@mail.umcs.pl">
                  andrzej.radomski@mail.umcs.pl
                </a>
              </small>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <p className="footer-license">
                Teksty naszego czasopisma dostępne są na licencji Creative
                Commons Uznanie autorstwa-Użycie niekomercyjne 4.0
                Międzynarodowe.
                <br />
                Licencja Creative Commons
              </p>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
