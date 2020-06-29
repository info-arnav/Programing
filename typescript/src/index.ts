const express = require("express");
const app = express();
app.listen("8080", (req, res) =>
  console.log("hey there its done now lets see")
);
app.get("/", (req, res) => {
  res.send(+"37");
});
