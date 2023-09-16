const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "hello world" });
});

app.listen(8080);
