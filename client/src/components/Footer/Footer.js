// Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="columns">
        <div className="column">
          <div className="footer-heading">
            Kultura i Historia | ISSN 1642-9826
          </div>
          <div class="table-container">
            <table class="footer-text">
              <thead>
                <tr>
                  <th>Lp.</th>
                  <th>Id</th>
                  <th>Liczba Punktów</th>
                  <th>Przypisane dyscypliny naukowe</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>32367</td>
                  <td>201183</td>
                  <td>20</td>
                  <td>historia; nauki o kulturze i religii</td>
                </tr>
              </tbody>
            </table>
            <small className="footer-text">
            <a href="https://www.gov.pl/web/edukacja-i-nauka/komunikat-ministra-edukacji-i-nauki-z-dnia-1-grudnia-2021-r-w-sprawie-wykazu-czasopism-naukowych-i-recenzowanych-materialow-z-konferencji-miedzynarodowych">
              Link do wykazu czasopism MEiN
            </a>
          </small>
          </div>
        </div>
        <div className="column">
          <div className="footer-heading">Instytut Nauk o Kulturze</div>
          <small className="footer-text">
            UMCS
            <br />
            20-031 Lublin, pl. Marii Curie-Skłodowskiej 4
            <br />
            pod patronatem lubelskiego Oddziału PTK
          </small>
        </div>
        <div className="column">
          <div className="footer-heading">Editor-in-Chief</div>
          <small className="footer-text">
            dr hab. Andrzej Radomski, Prof. UMCS
            <br />
            ORCID: 0000-0002-1735-605X
            <br />
            <a href="mailto:andrzej.radomski@mail.umcs.pl">
              andrzej.radomski@mail.umcs.pl
            </a>
          </small>
        </div>
        <div className="column">
          <p className="footer-license">
            Teksty naszego czasopisma dostępne są na licencji Creative Commons
            Uznanie autorstwa-Użycie niekomercyjne 4.0 Międzynarodowe.
            <br />
            Licencja Creative Commons
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
