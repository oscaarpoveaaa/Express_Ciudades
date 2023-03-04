"use strict";

let express = require("express"),
  app = express();

app.use(express.static(__dirname + "/public/"));


require('dotenv').config();

let port = process.env.PORT || 3000;

let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views/");

const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.kbmhq7x.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;


app.use("/", require("./router/ciudad"));
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Base de datos conectada"))
  .catch((e) => console.log(e));

  app.listen(port);

console.log("Iniciando Express en el puerto 3000");
