const express = require('express')

const app = express()

const PORT = 3000

app.listen(PORT, () =>{
    console.log(`Servidor rodando ma porta localhost:${PORT}`);
})

app.get('/', (req,res) => {

    res.status(200).send('Ola mundo')

})