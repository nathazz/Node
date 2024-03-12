const path = require("path")
const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser");
const basePath = path.join(__dirname, "../template");
router.use(bodyParser.urlencoded({ extended: true }));

  router.get("/catalogs" , (req, res) =>{
      res.status(200).sendFile(`${basePath}/catalogs.html`)
    
    })

    
    router.post("/profile", (req, res) => {
      const body = req.body;
      const { name, email, key } = req.body;
      console.log(body); 
      res.redirect(`/foods/profile?name=${name}&email=${email}&key=${key}`);
  });
  
  router.get("/profile", (req, res) =>{
    res.status(200).sendFile(`${basePath}/profile.html`)
  })

  router.get("/log", (req, res) =>{
    res.status(200).sendFile(`${basePath}/form.html`)
  })



module.exports = router