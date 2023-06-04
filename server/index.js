const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.redirect("http://www.kulturaihistoria.umcs.lublin.pl")
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
