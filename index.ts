#! /usr/bin/env node

import inquirer from 'inquirer'

// 1) computewr will generate a random number - done

// 2) user input for guessing number - done

// 3) compare user input with computer generated number and show result 


const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("Welcome to number guessing game");
const answers = await inquirer.prompt([
   {
        name:"userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10: ",
   },
]);

if(answers.userGuessedNumber === randomNumber ){
    console.log("Congratulations u guessed right number.");
}else{
    console.log("You guessed wrong number");
}
