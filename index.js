const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("hello world!");
});

app.get("/date", (request, response) => {
  const date = new Date();
  response.send(`today's date is ${date}`);
});

app.get("/page", (request, response) => {
  response.sendFile("./index.html", { root: __dirname });
});

app.listen(3000);
