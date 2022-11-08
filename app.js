
// const inquirer = require('inquirer')
import bird from "./classes/bird.js";
import rabbit from "./classes/rabbit.js";
import pig from "./classes/pig.js";
import sheep from "./classes/sheep.js";
import inquirer from "inquirer";
let myPet;

const start = async () => {
  const { typeOfPet } = await inquirer.prompt({
    type: "list",
    name: "typeOfPet",
    message: "please choose what type of pet you would like",
    choices: [
      {
        key: "a",
        name: "bird",
        value: "bird",
      },
      {
        key: "b",
        name: "rabbit",
        value: "rabbit",
      },
      {
        key: "c",
        name: "pig",
        value: "pig",
      },
      {
        key: "c",
        name: "sheep",
        value: "sheep",
      },
    ],
  });
  const { petName } = await inquirer.prompt({
    type: "input",
    name: "petName",
    message: "what is you pet called?",
  });

  if (typeOfPet === "bird") {
    myPet = new bird(petName);
  } else if (typeOfPet === "rabbit") {
    myPet = new rabbit(petName);
  } else if (typeOfPet === "pig") {
  myPet = new pig(petName);
} else if (typeOfPet === "sheep") {
  myPet = new sheep(petName);
}
  console.log(`you have a ${myPet.name}`);
  userChoice();
};

let userChoice = async () => {
  const { choice } = await inquirer.prompt({
    type: "list",
    name: "choice",
    message: "what would you like to do?",
    choices: [
      {
        key: "a",
        name: "play with your pet",
        value: "play",
      },
      {
        key: "b",
        name: "feed your pet",
        value: "feed",
      },
      
      {
        key: "c",
        name: "give your pet a drink",
        value: "drink",
      },
    
      {
        key: "d",
        name: "view your pet stats",
        value: "stats",
      },
      {
        key: "e",
        name: "hug your pet",
        value: "hug",
      },
      {
        key:"f",
        name: "quit the game",
        value: "quit",
      },
    ],
  });

  // if (choice === "play") await myPet.play()

  if (choice === "feed") await myPet.eats();
  if (choice === "play") await myPet.play();
  if (choice === "stats") await myPet.stats();
  if (choice === "drink") await myPet.drinks();
  if (choice === "hug") await myPet.hug();

  if (choice === "quit") {
    const quitChoice = await confirmQuit();
    if (quitChoice) return;

  }

  myPet.stats();
  userChoice();
};

let confirmQuit = async () => {
  const { quitChoice } = await inquirer.prompt({
    type: "list",
    name: "quitChoice",
    message: "are you sure you want to quit? you pet will be adopted",
    choices: [
      {
        key: "a",
        name: "yes i'm sure",
        value: "yes",
      },
      {
        key: "b",
        name: "no i'll keep playing",
        value: "no",
      },
    ],
  });
  if (quitChoice === "yes") return true;
  else return false;
};

start();
