// Require packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./util/generateHtml')

// Require Classes
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

startPrompt()
function startPrompt() {
    inquirer.prompt([
        {
            type: "input",
            message: "Welcome to Team Builder! Let's get started by adding your team manager. Please enter manager name:",
            name: "managerName"
        },
        {
            type: "input",
            message: "Enter manager ID:",
            name: "managerId"
        },
        {
            type: "input",
            message: "Enter manager email address:",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "Enter manager office number:",
            name: "managerOffice"
        },
    ])
    .then((answers) => {
        const newManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
        console.log("Success!")
        console.log(newManager);
    })
}