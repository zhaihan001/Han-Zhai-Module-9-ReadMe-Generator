// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('generateMarkdown');


// TODO: Create an array of questions for user input
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
        choices: ['email', 'phone', 'telekinesis'],
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileName = "README.md"
    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('README Created')
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
