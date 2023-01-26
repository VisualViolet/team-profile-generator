// Require packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./util/generateHtml')

// Require Classes
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')


const startPrompt = () => {
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
        addEmployee()
    })
}

const addEmployee = () => {
    inquirer.prompt(
        {
            type: "list",
            message: "Let's build your team! What type of employee would you like to add?",
            choices: ["Engineer", "Intern", "I'm done assembling my team"],
            name: "choice",
        }
    )
    .then((answers) => {
        switch(answers.choice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "I'm done assembling my team":
                assembleTeam();
        }
    })
}

const addEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Great! Whats this engineer's name?",
            name: "engineerName",
        },
        {
            type: "input",
            message: "Enter engineer ID:",
            name: "engineerId",
        },
        {
            type: "input",
            message: "Enter engineer email:",
            name: "engineerEmail",
        },
        {
            type: "input",
            message: "Enter engineer's GitHub username:",
            name: "engineerGithub",
        },
    ])
    .then((answers) => {
        const newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        console.log(newEngineer)
    })
}

const addIntern = () => {
    console.log("Add intern");
}

const assembleTeam = () => {
    console.log("Team assembled!")
}

startPrompt()