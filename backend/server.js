const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.send("Health check from service B");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
