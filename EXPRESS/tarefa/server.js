const express = require("express")
const app = require('./app.js');

const PORT  = 5000

app.listen(PORT, () =>{
console.log(`Servidor rodando na porta http://localhost:${PORT}`);
})

module.exports = app