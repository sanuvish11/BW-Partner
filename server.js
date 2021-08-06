
var express = require("express");
var app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const fs = require('fs')
const mongoose = require("mongoose");
const http = require("http");
const server = http.createServer(app);
app.use(cors(corsOptions));

var corsOptions = {
    origin: "*",
    corsOptions: 200
};


app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept",
        "Access-Control-Allow-Methods →GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS",
        "image/jpeg"
    );
    next();
});
global.__basedir = __dirname;
app.use(cors(corsOptions));
global.adminCommission=50;
global.taxRate=10;
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(express());
mongoose
  .connect(
    "mongodb+srv://Arbaaz:zJi7Y9oK0y8FZ3GL@cluster0.simoo.mongodb.net/demoApp?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

  require("./Routes")(app);

app.get("/", function (req, res) {
    res.send('Welcome To Astrology Application' + "  " + 'verion 1.0.0 06/01/2021');
});
//server port
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
//call socket  port
