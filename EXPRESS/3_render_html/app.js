const express = require('express')
const app = express()
const PORT = 3000

const path = require('path')

const basePath = path.join(__dirname, "templates")


app.get('/', (req,res) => {

    res.status(200).sendFile(`${basePath}/index.html`)

})


app.listen(PORT, () =>{
    console.log(`Servidor rodando ma porta localhost:${PORT}`);
})