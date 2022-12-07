const inquirer = require("inquirer");
const fs = require("fs");
const questions = [];

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What languages do you know?",
      name: "languages",
    },
    {
      type: "input",
      message: "What is your preferred method of communication",
      name: "comms",
    },
  ])
  .then((answers) => {
    console.log(answers);

    fs.writeFile("log.txt", JSON.stringify(answers), (err) =>
      err ? console.error(err) : console.log(answers.name)
    );
  });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
