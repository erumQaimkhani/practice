#!/user/bin/evn node

import chalk  from "chalk"
import inquirer from "inquirer";
let   answer= await inquirer.prompt({
    name:"name",
    message:"what is your name?",
    
    
})
let   answer2= await inquirer.prompt({
    name:"name",
    message:chalk.blue.bold`what is your father name?`,
    
})
let answer3=await inquirer.prompt({
  name:"name Gym club",
  message:chalk.green`your gym club name?`,

});
let answer4=await inquirer.prompt({
  name:"nameTranier",
  message:chalk.bgBlue`select your nameTrainer`,
  type:"list",
  choices:["Kiran Naveed","Munawar","Mubashir","Ahmed","Hassan","Daman"," Kanza"]

})
let answer5=await inquirer.prompt({
  name:"exercise",
  message:chalk.overline `slect your  exercise  `,
  type:"list",
  choices:["weight lifting","Yoga","gymnastic","aerobic","Breathing","Meditation"]

})
let answer6=await inquirer.prompt({
  name:"Day",
  message:chalk.magenta` select your Day`,
  type:"list",
  choices:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

})
let answer7=await inquirer.prompt({
  name:"Time",
  message:chalk.bold`select your time`,
  type:"list",
  choices:["9am","12am","7am"]


})



