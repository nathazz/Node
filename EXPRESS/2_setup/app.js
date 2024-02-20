const express = require('express')

const app = express()

const PORT = 3000

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
})

app.get('/', (req,res) => {

    res.status(200).send('Ola mundo')

})