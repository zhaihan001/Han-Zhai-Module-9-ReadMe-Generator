// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
var badge;
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

function licenseText (license){
    if (license == "MIT"){
        badge = `MIT License

        Copyright (c)
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.`
    }
    else {
        badge =`ISC License

        Copyright (c) 
        
        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted, provided that the above
        copyright notice and this permission notice appear in all copies.
        
        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.`
    }
    return badge;
}

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

${licenseText()}

## Installation Instruction

${installation}

## Usage

${usage}
md
![alt text](./screenshot.JPG)


## How to Contribute

${contribution}

## License

${license}

## Tests

${test}

## Questions

My Github profile: https://github.com/${username}

Please feel free reach me with additional questions.
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
