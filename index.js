// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?",
 "What is the description of your project?", 
 "What are the installation instructions?",
"What is the usage information for your project?",
"What are the contribution guidelines?",
"What are the test instructions?",
"What is your github username?",
"What is your email address?",
"What license will you use for your project?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync('Readme.md', fileName)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: questions[0]
    },
    {
        type: 'input',
        name: 'description',
        message: questions[1]
    },
    {
        type: 'input',
        name: 'installation',
        message: questions[2]
    },
    {
        type: 'input',
        name: 'usage',
        message: questions[3]
    },
    {
        type: 'input',
        name: 'contribution',
        message: questions[4]
    },
    {
        type: 'input',
        name: 'instructions',
        message: questions[5]
    },
    {
        type: 'input',
        name: 'github',
        message: questions[6]
    },
    {
        type: 'input',
        name: 'email',
        message: questions[7]
    },
    {
        type: 'list',
        name: 'license',
        message: questions[8],
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "none"]
    }
  ])
  .then((data) => {
    const file = generateMarkdown(data);
    writeToFile(file, data);
    console.log('README has been created!')
  })
  .catch((error) => {
    console.log("Something went wrong :(" + error)
  });
}

// Function call to initialize app
init();
