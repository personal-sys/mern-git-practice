const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.send("Health from Rebase C & D");
});

const PORT = 5000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
