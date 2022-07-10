const express = require("express");

const app = express();
const port = 80;
let requests = 0;

app.get("/", (req, res) => {
  requests++;
  console.log("Request x" + requests);
  res.send(
    `${Math.floor(
      Math.random() * 10000
    )} Generated at ${new Date().toUTCString()}`
  );
});

app.listen(port, () => {
  console.log("Server initalised and listening at :" + port);
});
