// Require packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./util/generateHtml')

// Require Classes
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// Array to store added employees
const team = [];

// Function to start application and prompt for manager information
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
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
        team.push(manager);
        console.log(manager);
        addEmployee()
    })
}

// Function to determine which function to run next depending on choice.
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

// Function to prompt engineer questions
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
        team.push(newEngineer);
        console.log(newEngineer)
        addEmployee();
    })
}

// Function to prompt intern quotes
const addIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Great! Whats this interns name?",
            name: "internName",
        },
        {
            type: "input",
            message: "Enter intern ID:",
            name: "internId",
        },
        {
            type: "input",
            message: "Enter intern email:",
            name: "internEmail",
        },
        {
            type: "input",
            message: "Enter interns school:",
            name: "internSchool",
        },
    ])
    .then((answers) => {
        const newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        team.push(newIntern);
        console.log(newIntern);
        addEmployee();
    })
}

// Function to write team-page.html using generateHtml function with array of team members passed
const assembleTeam = () => {
    fs.writeFile('./dist/team_page.html', generateHtml(team), (err) =>
      err ? console.error(err) : console.log('Your team page has been generated!')
    );
}

startPrompt()