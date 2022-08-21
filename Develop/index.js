// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    {
        type:'input',
        message: 'Please enter the title of your project: ',
        name:'title',
    },
    {
        type:'input',
        message: 'Provide a short description explaining the what, why, and how of your project. ',
        name:'description',
    },
    {
        type:'input',
        message: 'Please provide installation instructions',
        name:'instruction',
    },    
    {
        type:'input',
        message: 'Please provide usage information',
        name:'usage',
    },
    {
        type:'input',
        message: 'Please provide contribution guidelines',
        name:'contribution',
    },
    {
        type:'input',
        message: 'Please provide test instructions',
        name:'test',
    },
    {
        type: 'list',
        message: 'Please choose a license',
        name: 'license',
        choices: ['MIT', 'ISC'],
    },
    {
        type:'input',
        message: 'Please enter your Gibhub username',
        name:'username',
    },
    {
        type:'input',
        message: 'Please enter your email address',
        name:'email',
    },
];

// Create a function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('README file created')
    );
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => writeToFile(response));
}

// Function call to initialize app
init();
