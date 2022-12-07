const inquirer = require("inquirer");
const fs = require("fs");
const questions = [];

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project name?",
      name: "title",
    },
    {
      type: "input",
      message: "Write a short description of the project.",
      name: "description",
    },
    {
      type: "input",
      message: "What license would you like to use/list?",
      name: "license",
    },
    {
      type: "input",
      message: "What would you like to include under the usage section?",
      name: "usage",
    },
    {
      type: "input",
      message: "What would you like to include under the installation section?",
      name: "installation",
    },
    {
      type: "input",
      message: "Would you like to include any credits?",
      name: "credits",
    },
  ])
  .then((answers) => {
    console.log(answers);

    fs.writeFile("README.md", JSON.stringify(answers), (err) =>
      err ? console.error(err) : console.log("README successfully created!")
    );
  });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
