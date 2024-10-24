
// Variables go here
const prompt = require("prompt-sync")();
const gameTextElement = document.querySelector('p')
const gameInputElement= document.querySelector('input')
const subButtonElement = document.querySelector('button')
let input = ''
let playerHP = 10
let computerHP = 10
let round = 1
const userName=  prompt ('What is your name, pardner?');




// Functions go here
// this function from Josh's terminal game
const getRandomNumber = (min, max) => {
    min = Math.ceil(min); // Round up the minimum value
    max = Math.floor(max); //Round Down the maximum Value
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
subButtonElement.addEventListener('click',() => {
    input = gameInputElement.textContent;
});

const damageComputer = () => computerHP--;
const damagePlayer = () => playerHP--;









// Codebase goes here



/* 
1) We should display a welcome message
    1a)Press any key to continue
2) Explain the premise
    2a) explain the rules
    Press any key to continue
3) Ask the player "Who are you?"
    3a) Welcome them by name
    Press any key to continue
4) Some Flavor text appears
5) Game Begins
6) User selects "attack"
    6a) npc randomly selects npcAttack
    6b) check result of fight and display message
    6c) increment health
    6d) check for victory/defeat
7) display win/loss message

attacks are Shoot Pistol, Knives, and Fists



*/