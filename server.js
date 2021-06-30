const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("*", function (req, res) {
  res.send("Hopefully this automatic deploy works!");
});

app.listen(PORT, () => console.log("App listening on port " + PORT));
