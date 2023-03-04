"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ciudadSchema = new Schema({
  id: String,
  nombre: String,
  poblacion: String,
  pais: String,
  continente: String,
  gentilicio: String,
});

const Ciudad = mongoose.model("Ciudad", ciudadSchema, "ciudad");

module.exports = Ciudad;
