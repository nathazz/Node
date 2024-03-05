const path = require("path")
const express = require("express")
const router = express.Router()
const basePath = path.join(__dirname, "../template");


  router.get("/catalogs" , (req, res) =>{
      res.status(200).sendFile(`${basePath}/catalogs.html`)
    
    })
  
  router.get("/profile", (req, res) =>{
    res.status(200).sendFile(`${basePath}/profile.html`)
  })

module.exports = router