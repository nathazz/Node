const express = require("express");
const router = express.Router()
const path = require("path");
const basePath = path.join(__dirname, "../template");



  router.get("/add" , (req, res) =>{
      res.status(200).sendFile(`${basePath}/userForm.html`)
    
    })
  
  router.get("/save", (req, res) =>{
    const quer = req.query
    res.status(200).sendFile(`${basePath}/getUsers.html`)
  
    console.log(quer);
  })

  

  module.exports = router