const express = require("express");
const router = express.Router();
const Ciudad = require("../models/Ciudad");

router.get("/", async (req, res) => {
  try {
    const arrayCiudadDB = await Ciudad.find();
    console.log(arrayCiudadDB);
    res.render("ciudad", { arrayCiudad: arrayCiudadDB });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  const body = req.body
  console.log(body);
  try {
    const ciudadDB = new Ciudad(body)
    await ciudadDB.save()
    res.redirect('/')
  } catch (error) {
    console.log(error);
  }
});

router.get("/crear", (req, res) => {
  res.render("crear")
})

router.get("/:id", async (req, res) => {
  const id = req.params.id
  
  try {
    const ciudadDB = await Ciudad.findOne({_id: id})
    res.render('detalle',{
      ciudad : ciudadDB,
      error: false
    })
  } catch (error) {
    console.log(error);
    res.render('detalle',{
      error: true,
      mensaje: 'Ciudad no encontrada'
    })
  }
});

router.delete('/:id', async (req, res) =>{
  const id = req.params.id;
  try{
    const ciudadDB = await Ciudad.findByIdAndDelete({_id: id});
    if(!ciudadDB) {
      res.json({
        estado: false,
        mensaje: 'No se puede eliminar la ciudad.'
      })
    }else{
      res.json({
        estado: true,
        mensaje: 'Ciudad eliminada.'
      })
    }
  }catch (error){
    console.log(error)
  }
});

router.put('/:id', async (req, res) =>{
  const id = req.params.id;
  const body = req.body;
  try{
    const ciudadDB = await Ciudad.findByIdAndUpdate(
      id,body, {useFindAndModify: false}
    )
    console.log(ciudadDB)
    res.json({
      estado: true,
      mensaje: 'Ciudad editada.'
    })
  }catch (error){
    console.log(error)
    res.json({
      estado: false,
      mensaje: 'No se puede editar la ciudad.'
    })
  }
});





module.exports = router;