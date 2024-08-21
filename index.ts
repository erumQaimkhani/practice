import { input } from "@inquirer/prompts";
let answer = await input({
    message: 'Enter your name?',
})

let answer2 = await input({
    message: 'Enter your father name?',
});

console.log(answer, answer2);
