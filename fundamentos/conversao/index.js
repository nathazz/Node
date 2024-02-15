const  inquirer = require("inquirer")

inquirer.prompt([
    {
        name:'p1',
        message:'write minute of convert in hours:'
    }
]).then((answer) =>{
    const convert = parseFloat(answer.p1) / 60
    console.log(`The convert is: ${convert} hours`)

}).catch((err) =>{console.log(err)})