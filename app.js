// Variables go here
document.addEventListener("DOMContentLoaded", () => {
  //This listener recommended by chatgpt
  const gameTextElement = document.querySelector("p");
  const gameInputElement = document.querySelector("input");
  const subButtonElement = document.querySelector("button");
  console.dir(gameTextElement);
  let input = "";
  let playerHP = 10;
  let computerHP = 10;
  let round = 1;
let currentMessage = 'Submit Any Text to Begin'
let userName = ''
  const welcomeMessage =
    "Welcome to the West pardner, its right around noon. Looks like a duel is in order. Why don't you show us how it should be done around here.  \n Submit Any Text to continue";
  const rulesText =
    "In High Noon you will be dueling a dang dirty varmint who has offended your honor somehow. You have met at High Noon to duel each other. As any proper cowboy knows, there are three ways to fight. Shooting each other, Stabbing each other, and Wrastling each other. Each cowboy attack maneuver has an advantage over another, but also a weakness. Basically Gun Beats Knife, Knife stabs the Wrestling Idiot, and It's hard to fire a gun while being choked out. Of course as we all know, if two cowboys shoot at each other at the same time, the bullets will collide in mid air. Similar Events happen with Wrastling to a standstill, and knives parrying knives. \n Submit Any Text to Continue";
    const getUsername = "What's your name Pardner?"
  // Functions go here
  // this function from Josh's terminal game
  const getRandomNumber = (min, max) => {
    min = Math.ceil(min); // Round up the minimum value
    max = Math.floor(max); //Round Down the maximum Value
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const damageComputer = () => computerHP--;
  const damagePlayer = () => playerHP--;
  const clearInput = () => input = "";

  // Game loop below

  // 1) We should display a welcome message
  //     1a)Press any key to continue

  subButtonElement.addEventListener("click", () => {
    input = gameInputElement.value;
    console.log(input);
    if (currentMessage === "Submit Any Text to Begin" && input !== "") {
        gameTextElement.innerText = welcomeMessage;
        currentMessage = welcomeMessage
        clearInput();
    }
    //   2) Explain the premise
    //2a) explain the rules
    else if (currentMessage === welcomeMessage && input !== '' ) {
        gameTextElement.innerText = rulesText;
        currentMessage = rulesText;
        clearInput();
    }
    else if(currentMessage === rulesText && input !== '') {
        gameTextElement.innerText = getUsername;
        currentMessage = getUsername;
        clearInput();
    }
    else if (currentMessage === getUsername && input !== '') {
                userName = input;
        let welcomeUsername = `Welcome ${userName}`
        gameTextElement.innerText = welcomeUsername;
        currentMessage = welcomeUsername;
        clearInput();
    }
  });
});
// }
/* 

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
