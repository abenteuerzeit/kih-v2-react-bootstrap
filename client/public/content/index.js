import editors from "./_editors";
import advisors from "./_advisors";
import review_data from "./_reviewers";

const MEiN_CLASSIFICATION = {
  lp: 32367,
  id: 201183,
  date: "2021-12-01",
  points: 20,
  field: {
    name: "humanities",
    disciplines: ["history", "culture and religion studies"],
  },
  url: "https://www.gov.pl/web/edukacja-i-nauka/komunikat-ministra-edukacji-i-nauki-z-dnia-1-grudnia-2021-r-w-sprawie-wykazu-czasopism-naukowych-i-recenzowanych-materialow-z-konferencji-miedzynarodowych",
};


const journal_data = {
  name: "Kultura i Historia",
  issn: "1642-9826",
  classification: MEiN_CLASSIFICATION,
  editorial_board: editors.data,
  advisory_board: advisors.data,
  reviewers: review_data.reviewers.data,
  email: "czasopismokulturaihistoria@gmail.com",
  office: {
    name: "The Institute of Cultural Studies of the Maria Curie-Skłodowska University",
    address: {
      street: "Plac Marii Curie-Skłodowskiej 4",
      postal_code: "20-031",
      city: "Lublin",
      country: "Poland",
    },
  },
  copyright: {
    license: "CC BY-NC 4.0",
    url: "https://creativecommons.org/licenses/by-nc/4.0/deed.en",
    img_src: "http://i.creativecommons.org/l/by-nc/4.0/88x31.png",
    text: "Attribution-NonCommercial 4.0 International",
    logo_design: "Sebastian Zonik, M.A.",
  },
  patronage: "The Lublin Branch of the Polish Sightseeing Society (PTK)",
  past_editors: {
    issues_1_9: "Krzysztof Karauda",
    issues_10_29: "Radosław Bomba",
    issues_30: "Andrzej Radomski",
    issues_31_Current: "Andrzej Radomski, Sidey Myoo",
  },
};

export default journal_data;
