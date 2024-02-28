const express = require("express");
const app = express();
const PORT = 3000;

const path = require("path")

//ler o body
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())


const basePath = path.join(__dirname, "./templates");
const users = require('./users/router.js')

app.use('/users' , users)

app.get("/", (req, res) => {
  res.status(200).sendFile(`${basePath}/index.html`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
