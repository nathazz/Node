const path = require("path")
const express = require("express")
const app = express();



app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())
app.use(express.static('public'))

const basePath = path.join(__dirname, "./template");

const foodsR = require('./router/router.js')

//endpoints
app.use('/foods' , foodsR)

app.get("/", (req, res) => {
  res.status(200).sendFile(`${basePath}/index.html`);
});


 app.use((req, res, next) =>{
     res.status(404).sendFile(`${basePath}/404.html`)
 })

module.exports = app
