const academic_titles = {
    schema: {
      name: "",
    },
    data: {
      prof: "prof dr. hab.",
      dr_hab: "dr hab",
      dr: "dr",
    },
  };
  
  const review_data = {
    policy:
      "Each article is peer-reviewed by independent reviewers who are not affiliated with the authors of the publication. Neither the author nor the reviewers of the publication have their identity revealed. The reviewers sign a statement declaring that they have no conflicts of interest, whereby a conflict of interest is deemed to be any direct and personal relationship whatsoever between the reviewer and the author (in particular, kinship to the second degree, marriage), professional subordination, or direct scholarly collaboration within the last two years before the date of the review. Each review contains an unambiguous conclusion reached by the reviewer whether the submission should be accepted for publication or whether it should be rejected.",
    reviewers: {
      schema: {
        name: "",
        title: academic_titles,
      },
      data: [
        {
          name: "Bartosz Korzeniowski",
          title: academic_titles.data.prof,
        },
        {
          name: "Paweł Łuczeczko",
          title: academic_titles.data.dr_hab,
        },
        {
          name: "Dmytro Shevchuk",
          title: academic_titles.data.dr,
        },
        {
          name: "Paweł Frelik",
          title: academic_titles.data.dr_hab,
        },
        {
          name: "Ewa Solska",
          title: academic_titles.data.dr_hab,
        },
        {
          name: "Piotr Zawojski",
          title: academic_titles.data.prof,
        },
        {
          name: "Grzegorz Stuńza",
          title: academic_titles.data.dr_hab,
        },
        {
          name: "Michał Ostrowicki (Sidey Myoo)",
          title: academic_titles.data.prof,
        },
        {
          name: "Magdalena Kamińska",
          title: academic_titles.data.dr_hab,
        },
      ],
    },
  };
  
  export default review_data;