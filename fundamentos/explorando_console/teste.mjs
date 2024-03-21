import chalk from "chalk";
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const list = ["sim", "yes", "s", "y"]

console.log(chalk.blue.bold("Guess a number between 1 and 5!!"))
 

rl.question("You ready?: ", (r) => {
  if (!list.includes(r.toLowerCase())) {
    console.error(chalk.red.bold("Ok 😢"))
    rl.close(); 
  } else {
    console.log(chalk.green("you have 3 seconds to think"))
  
  
 setTimeout(() => {
      const numberS = getRandomNumber(1, 5);

      console.log("reply now!")


      rl.question("R: ", (r) => {
        const user = parseInt(r)

        if (!isNaN(user)) {
          if (user === numberS) {
            console.log(chalk.green.bold("right"))
          } else {
            console.error(chalk.red.bold(`wrong. The number was: ${numberS}.`))
          }
        } else {
          console.error(chalk.yellow.bold("Please, input of valid number"));
        }
    
        rl.close() 
      })
    }, 3000)

  }
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
