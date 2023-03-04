let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { titulo: "mi título dinámico" });
});

router.get("/contacto", (req, res) => {
  res.render("contacto", {
    tituloContacto: "Estamos en contacto de manera dinámica",
  });
});

module.exports = router;
