const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

createTeam()
function createTeam() {
    inquirer
        .prompt([
            {
                type: `input`,
                name: `name`,
                message: `Please enter the Team Manager's name.`,
            },
            {
                type: `input`,
                name: `id`,
                message: `Please enter the Team Manager's ID.`,
            },
            {
                type: `input`,
                name: `email`,
                message: `Please enter the Team Manager's email.`,
            },
        ])
}