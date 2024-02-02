const chalk = require('chalk')
const inquirer = require("inquirer")


inquirer.prompt([
    {
        name:"name",
        message:"What´s your name?"
    },
    {
        name:"old",
        message:"How old are you?"
    }
]).then((answer) =>{
    if(!answer.name || !answer.old){
        throw new Error("The name and old are mandatory")
    }
    
    const response = `Seu nome é ${answer.name}  e tem ${answer.old}`
    console.log(chalk.bgYellow.black(response))
    
}).catch((err) => console.log(err))


