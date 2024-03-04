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


const basePath = path.join(__dirname, "templates");

app.get("/", (req, res) => {
  res.status(200).sendFile(`${basePath}/index.html`);
});


app.get("/users/add" , (req, res) =>{
  res.status(200).sendFile(`${basePath}/userForm.html`)

})

app.post("/users/save" , (req,res) => {
  const p = req.body
  const name = req.body.name
  const age = req.body.age

  res.status(200).send(`Nome:${name}\nIdade:${age}`)

  console.log(`Nome:${name}\nIdade:${age}`);
  console.log(p);
})

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  console.log(`estamos buscando pelo usuário: ${id}`);
  res.status(200).sendFile(`${basePath}/users.html`)
  
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
