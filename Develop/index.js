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
        name:'installation',
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

const generateFile = ({title, description, installation, usage, contribution, test, license, username, email })=>
`# ${title}

## Description

${description}

## Table of Contents

- [Badges](#badges)
- [Installation Instruction](#installation-instruction)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


## Installation Instruction

${installation}

## Usage

${usage}

## How to Contribute

${contribution}

## License

${license}

## Tests

${test}

## Questions

My Github profile: https://github.com/${username}

Please feel free reach me out with additional questions.
My Email Address is: ${email}`


// Create a function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", generateFile(data), (err) =>
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
