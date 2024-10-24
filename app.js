
// Variables go here

const gameTextElement = document.querySelector('p')
const gameInputElement= document.querySelector('input')
const subButtonElement = document.querySelector('button')
console.dir(gameTextElement)
let input = ''
let playerHP = 10
let computerHP = 10
let round = 1





// Functions go here
// this function from Josh's terminal game
const getRandomNumber = (min, max) => {
    min = Math.ceil(min); // Round up the minimum value
    max = Math.floor(max); //Round Down the maximum Value
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
subButtonElement.addEventListener('click',() => {
    input = gameInputElement.value;
    console.log(input)
});

const damageComputer = () => computerHP--;
const damagePlayer = () => playerHP--;
// const clearInput= () => input = '';







// Game loop below
// let gameState = true
// 1) We should display a welcome message
//     1a)Press any key to continue
// gameTextElement.innerText === 'Submit Any Text to Begin' && 
// while(gameState){
if(gameTextElement.innerText === 'Submit Any Text to Begin' &&input!== ''){
    gameTextElement.innerText = "Welcome to the west pardner, its right around noon. Looks like a duel is in order. Why don't you show us how it should be done around here."
}

console.log(input)
// }
/* 
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