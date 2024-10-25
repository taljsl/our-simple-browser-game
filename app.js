/*
I have gotten us 80ish percent of the way to a fully functioning game. Issues I have run into are as follows:
Rounds and HP do not properly update and display during combat
Game sometimes crashes during combat series of messages and I can't figure out why
*/

// Variables go here
document.addEventListener("DOMContentLoaded", () => {
  //This listener recommended by chatgpt
  const gameTextElement = document.querySelector("p");
  const gameInputElement = document.querySelector("input");
  const subButtonElement = document.querySelector("button");
  console.dir(gameTextElement);

  //let variables
  let input = "";
  let playerHP = 10;
  let computerHP = 10;
  let round = 0;
  let currentMessage = "Submit Any Text to Begin";
  let userName = "";
  //   let combatMessage = "";
  // this function from Josh's terminal game
  const getRandomNumber = (min, max) => {
    min = Math.ceil(min); // Round up the minimum value
    max = Math.floor(max); //Round Down the maximum Value
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  //   damage functions
  const damageComputer = () => computerHP--;
  const damagePlayer = () => playerHP--;

  //   function for clearing input variable and box
  const clearInput = () => {
    input = "";
    gameInputElement.value = "";
  };
  //variables to display until combat
  const welcomeMessage =
    "Welcome to the West pardner, its right around noon. Looks like a duel is in order. Why don't you show us how it should be done around here.  \n Submit Any Text to continue";
  const rulesText =
    "In High Noon you will be dueling a dang dirty varmint who has offended your honor somehow. You have met at High Noon to duel each other. As any proper cowboy knows, there are three ways to fight. Shooting each other, Stabbing each other, and Wrastling each other. Each cowboy attack maneuver has an advantage over another, but also a weakness. Basically Gun Beats Knife, Knife stabs the Wrestling Idiot, and It's hard to fire a gun while being choked out. Of course as we all know, if two cowboys shoot at each other at the same time, the bullets will collide in mid air. Similar Events happen with Wrastling to a standstill, and knives parrying knives. \n Submit Any Text to Continue";
  const getUsername = "What's your name Pardner?";

  //Variables for combat
  let currentTotals = `You have ${playerHP} remaining and your foe has ${computerHP} remaining \n Press 1 to Shoot your revolver at your opponent \n Press 2 to run up and Stab your opponent \n Press 3 to Wrastle your opponent.`;
  const combatMessages =
    "You and your foe square off the sun reaches it's zenith and the belltower begins to ring what would you like to do? \n Press 1 to Shoot your revolver at your opponent \n Press 2 to run up and Stab your opponent \n Press 3 to Wrastle your opponent.";
  const shootDrawMessage = `Round ${round} \n You and your foe raise your endless ammo revolvers and fire at each other. As we all know however when two revolvers fire at each other at the same time \n${currentTotals}`;
  const shootWinMessage = `Round ${round} \n Your foe foolishly tried to run in and stab you a big fat bullet taught him the error of his ways. \n${currentTotals}`;
  const shootLoseMessage = `Round ${round} \n You foolishly tried to run up and stab your opponent. He shot you for your troubles\n${currentTotals}`;
  const stabDraw = `Round ${round} \n You and your foe both draw your blades and charge at each other, the Mirror match proves too much however and you each only manage to nick each others blades\n${currentTotals}`;
  const stabWin = `Round ${round} \n Your foe decided he wanted to go bare hands with you to prove how superior he is, your knife in his guts taught him the error of his ways \n${currentTotals}`;
  const stabLose = `Round ${round} \n You should have known better than to bring a knife to a gun fight\n${currentTotals}`;
  const wrastleDraw = `Round ${round} \n You and your foe grasp at each other's necks. Too stubborn to let go, you play a game of chicken to see who will pas out first. Only to let go gasping for air at the same time.\n${currentTotals}`;
  const wrastleWin = `Round ${round} \n Your foe has learned the hard way that when you pin his gun hand down and punch him in the face a whole lot it's really hard to aim\n${currentTotals}`;
  const wrastleLose = `Round ${round} \n You charged your foe trying to Wrastle with him and beat him up bare handed...He pulls out a knife and stabs you for your troubles\n${currentTotals}`;
  const invalidCombat = `That was an invalid input, you can only \n 1) Shoot \n Stab \n Wrastle`;
  const victoryMessage =
    "VICTORY \n You stand over you fallen foe as he bleeds out on the ground. \n Word of what you have done here will spread far and wide \n Would you like to play again?";
  const gameOverMessage =
    "Game Over \n Your opponent stands over you  as you bleed out.\n The last thing you see is your foe smirking at you as he turns around and walks away\n Would you like to play again?";
  // Functions go here
  const newGame = () => {
    round = 1;
    playerHP = 10;
    computerHP = 10;
    currentMessage = "Submit Any Text to Begin";
    gameTextElement.innerText = "Submit Any Text to Begin";
  };

  const checkGameOver = () => {
    if (playerHP <= 0) {
      combatMessage = gameOverMessage;
      gameTextElement.innerText = gameOverMessage;
      return false; // Game over
    } else if (computerHP <= 0) {
      combatMessage = victoryMessage;
      gameTextElement.innerText = victoryMessage;
      return false; // Victory
    }
    return true; // Game continues
  };
  const combatFunction = (inputs) => {
    //how to check prep combat result
    let compResult = getRandomNumber(1, 3);

    //draw results
    if (inputs == 1 && compResult == 1) {
      combatMessage = shootDrawMessage;
      round++;
      gameTextElement.innerText = shootDrawMessage;
      currentMessage = shootDrawMessage;
      clearInput();
      checkGameOver();
    } else if (inputs == 2 && compResult == 2) {
      round++;
      combatMessage = stabDraw;
      gameTextElement.innerText = stabDraw;
      clearInput();
      checkGameOver();
    } else if (inputs == 3 && compResult == 3) {
      round++;
      combatMessage = wrastleDraw;
      gameTextElement.innerText = wrastleDraw;
      clearInput();
      checkGameOver();
    } // player win-conditions
    else if (inputs == 1 && compResult == 2) {
      damageComputer();
      round++;
      combatMessage = shootWinMessage;
      gameTextElement.innerText = shootWinMessage;
      clearInput();
      checkGameOver();
    } else if (inputs == 2 && compResult == 3) {
      damageComputer();
      round++;
      combatMessage = stabWin;
      gameTextElement.innerText = stabWin;
      clearInput();
      checkGameOver();
    } else if (inputs == 3 && compResult == 1) {
      damageComputer();
      round++;
      combatMessage = wrastleWin;
      gameTextElement.innerText = wrastleWin;
      clearInput();
      checkGameOver();
    } //player lose conditions
    else if (inputs == 1 && compResult == 3) {
      damagePlayer();
      round++;
      combatMessage = shootLoseMessage;
      gameTextElement.innerText = shootLoseMessage;
      clearInput();
      checkGameOver();
    } else if (inputs == 2 && compResult == 1) {
      damagePlayer();
      round++;
      combatMessage = stabLose;
      gameTextElement.innerText = stabLose;
      clearInput();
      checkGameOver();
    } else if (inputs == 3 && compResult == 2) {
      damagePlayer();
      round++;
      combatMessage = wrastleLose;
      gameTextElement.innerText = wrastleLose;
      clearInput();
      checkGameOver();
    } else {
      combatMessage = invalidCombat;
      gameTextElement.innerText = invalidCombat;
      clearInput();
      checkGameOver();
    }
  };

  // Game loop below

  // 1) We should display a welcome message
  //     1a)Press any key to continue

  const runGame = () => {
    input = gameInputElement.value;
    console.log(input);
    //   2) Explain the premise
    if (currentMessage === "Submit Any Text to Begin" && input !== "") {
      gameTextElement.innerText = welcomeMessage;
      currentMessage = welcomeMessage;
      clearInput();
    }
    //2a) explain the rules
    else if (currentMessage === welcomeMessage && input !== "") {
      gameTextElement.innerText = rulesText;
      currentMessage = rulesText;
      clearInput();
    } //3) Ask the player "Who are you?"
    else if (currentMessage === rulesText && input !== "") {
      gameTextElement.innerText = getUsername;
      currentMessage = getUsername;
      clearInput();
    }
    //3a) Welcome them by name
    else if (currentMessage === getUsername && input !== "") {
      userName = input;
      let welcomeUsername = `Welcome ${userName}\n Submit Any Text to Continue to Violence`;
      gameTextElement.innerText = welcomeUsername;
      clearInput();
      currentMessage = combatMessages;
    } else if (currentMessage === combatMessages) {
      combatFunction(input);
      //4) Run the combat
    } else if (currentMessage === combatMessages) {
      combatFunction(input);
    }
  };
  subButtonElement.addEventListener("click", runGame);
  //Credit to chatgpt for showing me how to do a keyup listener and reminding me that the entire game can be in a function
  gameInputElement.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      runGame();
    }
  });
});
// }
/* 



  

5) Game Begins
6) User selects "attack"
    6a) npc randomly selects npcAttack
    6b) check result of fight and display message
    6c) increment health
    6d) check for victory/defeat
7) display win/loss message

attacks are Shoot Pistol, Knives, and Fists



*/
