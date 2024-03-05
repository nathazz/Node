const express = require("express");
const router = express.Router()
const path = require("path")
const basePath = path.join(__dirname, "../templates");


router.get("/add" , (req, res) =>{
    res.status(200).sendFile(`${basePath}/userForm.html`)
  
  })
  
  router.post("/save" , (req,res) => {
    const p = req.body
    const name = req.body.name
    const age = req.body.age
  
    res.status(200).send(`Nome:${name}\nIdade:${age}`)
    console.log(`Nome:${name}\nIdade:${age}`);
    console.log(p);
  })
  
  router.get("/:id", (req, res) => {
    const id = req.params.id;
  
    console.log(`estamos buscando pelo usuário: ${id}`);
    res.status(200).sendFile(`${basePath}/users.html`)
    
  });
  
  module.exports = router