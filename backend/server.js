const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.send("Healthy check from A");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
