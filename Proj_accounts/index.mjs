import inquirer from 'inquirer'
import chalk from 'chalk'
import fs, { rename } from 'fs'



const operation = () => {

    inquirer.prompt([
        {
            type: 'list',
            name:'action',
            message:'O que você deseja fazer?',
            choices:['Criar Conta','Renomear Conta', 'Consultar Saldo', 'Depositar', 'Sacar','Apagar Conta', 'Sair'],
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
                checkBalance()
                break
            case 'Depositar':
                deposit()
                break
           case 'Sacar':
                withdraw()
                break
          case 'Apagar Conta':
                deleteAccount()
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
           
            return buildAccount()
           
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
    ]).then((answer) => {

        const oldP = `accounts/${answer.archive}.json`
    
    
        if(!fs.existsSync(oldP)){
         console.log(chalk.bgRed.black('Essa conta não existe!'));
       
         return renameName()
        }

        inquirer.prompt([
            { 
             name:'rename',
             message:'Agora, digite o nome que vc deseja renomear:'
           }
        ]).then((answer) => {
            
            const newP = `accounts/${answer.rename}.json`

            fs.renameSync(oldP, newP, (err)=>{
                if(err) console.log(err)
            })
            
            console.log(chalk.green(`Parabéns, sua conta foi renomeada para ${answer.rename}!`))
            operation()

        }).catch((err) => console.log(err))

     

    }).catch((err) => console.log(err))
} 

//depositar
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

        inquirer.prompt([
            {
                name: "amount", /*quantidade*/
                message: "Quanto você deseja depositar?"
            }

        ]).then((answer) =>{
            const amount = answer['amount']
            addAmount(accountName, amount)
            operation()

        }).catch((err) => console.log(err))


    }).catch((err) => console.log(err))
}

//consultar saldo
const checkBalance = () => {
    inquirer.prompt([
        {
            name:"accountName",
            message:"Qual o nome da sua conta?"
        }
    
    ]).then((answer) =>{

        const accountName = answer['accountName']
      
        if(!checkAccount(accountName)){
            return checkBalance()
        }

        const way = getAccount(accountName)
        console.log(chalk.green(`O saldo na conta ${accountName} é ${way.balance}R$💰`))

        operation()


    }).catch((err) =>  console.log(chalk.bgRed.black('Essa conta não existe, escolha outro nome!'), err.message))
}

//deletar conta 

const deleteAccount = () => {
    inquirer.prompt([
        {
            name:"accountName",
            message:"Você deseja deletar qual conta?"
        },
    ]).then((answer) => {

       const accountName = answer['accountName']

       if(!checkAccount(accountName)){
        return deleteAccount()
    }

    inquirer.prompt([
        {
            name:"msg",
            message:"Você tem certeza que quer eliminar esta conta?(s/sim) (n/não/nao):"

       }]).then((answer) =>{

        const way = `accounts/${accountName}.json`

        if( answer.msg === 's' || answer.msg === 'sim'){

            fs.unlinkSync(way, (err) =>{
                console.log(err)
               })

            console.log((chalk.green(`A conta ${accountName} foi excluída com sucesso`)))
            operation()
        }else{
            console.log(chalk.yellow(`A conta ${accountName} ainda existe`));
            operation()
        }

       }).catch((err) => console.log(err))
    

    }).catch((err) => console.log(err))
}

//sacar
const withdraw = () => {
    inquirer.prompt([
        {
            name:"accountName",
            message:"De qual conta você deseja sacar o saldo?"
        }
    ]).then((answer) => {
        const accountName = answer['accountName']

       if(!checkAccount(accountName)){
        return withdraw()
       }

       inquirer.prompt([
        {
            name:"amount",
            message:"Qual valor você deseja sacar?"
        }
       ]).then((answer) => {

        const amount = parseFloat(answer['amount']);

        if (isNaN(amount) || amount <= 0) {
            console.log(chalk.bgRed.black('Por favor, insira um valor válido.'));
            return withdraw();
        }

        getBalance(accountName, amount)

       }).catch((err) => console.log(err))
    }).catch((err) => console.log(err))
}

//funções de apoio
const checkAccount = (accountName) => {
   
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Essa conta não existe, escolha outro nome!'));
        return false
    }

    return true
}

const addAmount = (accountName, amount) => {

    const accountData = getAccount(accountName)

    if(!amount) {
         console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde'))
         return deposit()
    }
  

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), (err) =>{
        console.log(err);
    })

    console.log(chalk.green(`Foi depositado o valor de R$${amount} na sua conta!`))
}

const getBalance = (accountName, amount) => {

    const accountData = getAccount(accountName);

    if (amount > accountData.balance) {
        console.log(chalk.bgRed.black('Você não tem dinheiro suficiente para sacar este saldo.'));
        return operation();
    } 

    accountData.balance = accountData.balance - amount

    fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), (err) => {
        if (err) console.log(err);
    })

        console.log(chalk.green(`Um saque de $${amount} foi realizado em sua conta. Agora você tem $${accountData.balance}.`));
        operation()
}

const getAccount = (accountName, amount) => {

    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf-8',
        flag: 'r'
    })

    return JSON.parse(accountJSON)
}

operation()