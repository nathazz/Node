import inquirer from 'inquirer'
import chalk from 'chalk'
import fs, { rename } from 'fs'
import path from 'path'

const operation = () => {

    inquirer.prompt([
        {
            type: 'list',
            name:'action',
            message:'O que você deseja fazer?',
            choices:['Criar Conta','Renomear Conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair'],
        }
    ]).then((answer) => {
        const action = answer['action']

        switch (action){
            case 'Criar Conta':
                createAccount()
                break
            case 'Renomear Conta':
                renameName()
                break
            case 'Consultar Saldo':
                break
            case 'Depositar':
                deposit()
                break
           case 'Sacar':
                break
           case 'Sair':
            break
            default:
                break                                                        
        }
    
    }).catch((err) => console.log(err))

}


const createAccount = () =>{

    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))
    buildAccount()
}

//criar conta
const buildAccount = () => {

    inquirer.prompt([

        {
            name:'accountName',
            message:'Digite um nome para a sua conta:'
        }
      
    ]).then((answer)=>{
        const accountName = answer['accountName']
        console.info(accountName);

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black('Está conta já existe, escolha outro nome!'));
            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', (err)=>{
            console.log(err);
        })

        console.log(chalk.green('Parabéns sua conta foi criada'));
        operation()

    }).catch((err) => console.log(err))


}

//renomear nome
const renameName = () => {
    inquirer.prompt([
        {
            name:'archive',
            message:'Digite o nome da sua conta:'

        },  
        {
            name:'rename',
            message:'Agora, digite o nome que vc deseja renomear:'
        }
    ]).then((answer) => {

        const oldP = `accounts/${answer.archive}.json`
        const newP = `accounts/${answer.rename}.json`
    
        if(!fs.existsSync(oldP)){
         console.log(chalk.bgRed.black('Essa conta não existe!'));
         renameName()
         return
        }

        fs.renameSync(oldP, newP, (err)=>{
            if(err) console.log(err)
        })
        
        console.log(chalk.green(`Parabéns, sua conta foi renomeada para ${answer.rename} !`))
        operation()

    }).catch((err) => console.log(err))
} 

const deposit = () =>{

    inquirer.prompt([

        {
            name: "accountName",
            message: "Qual o nome da sua conta?"
        }
    ]).then((answer) =>{

        const accountName = answer['accountName']
        if(!checkAccount(accountName)){
            return deposit()
        }


    }).catch((err) => console.log(err))
}


const checkAccount = (accountName) => {
   
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Essa conta não existe, escolha outro nome!'));
        return false
    }
    return true
}

operation()