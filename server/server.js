const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.send("<h2>Hello Everyone, I'm running inside a docker container</h2>");
});

app.listen(5050);
