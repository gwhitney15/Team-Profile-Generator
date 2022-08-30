const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");


memberArray = [];
createTeam()
function createTeam() {
    addManager()
}

function addMember() {
    inquirer.prompt({
        type: `list`,
        name: `choice`,
        message: `Would you like to add a member or complete your team?`,
        choices: [`Add Engineer`, `Add Intern`, `Complete Team`],
    }).then(({ choice }) => {
        if (choice === 'Complete Team') {
            console.log("Completing Team")
            console.log(memberArray)
            return
        } else if (choice === 'Add Engineer') {
            addEngineer()
        } else if (choice === 'Add Intern') {
            addIntern()
        }
    })
}

function addManager() {
    const responses = inquirer
        .prompt([
            {
                type: `input`,
                name: `name`,
                message: `Please enter the Manager's name.`,
            },
            {
                type: `input`,
                name: `id`,
                message: `Please enter the Manager's ID.`,
            },
            {
                type: `input`,
                name: `email`,
                message: `Please enter the Manager's email.`
            },
            {
                type: `input`,
                name: `officeNumber`,
                message: `Please enter the Engineer's github.`
            },
        ]).then(managerData => {
            const { name, id, email, officeNumber } = managerData;
            const manager = new Manager(name, id, email, officeNumber);

            memberArray.push(manager);
            addMember()
        })
}

function addEngineer() {
    const responses = inquirer
        .prompt([
            {
                type: `input`,
                name: `name`,
                message: `Please enter the Engineer's name.`,
            },
            {
                type: `input`,
                name: `id`,
                message: `Please enter the Engineer's ID.`,
            },
            {
                type: `input`,
                name: `email`,
                message: `Please enter the Engineer's email.`
            },
            {
                type: `input`,
                name: `github`,
                message: `Please enter the Engineer's github.`
            },
        ]).then((engineerData) => {
            this.memberArray.push(new Engineer(engineerData));
            console.log(engineerData)
            addMember()
        })
}


function addIntern() {
    const responses = inquirer
        .prompt([
            {
                type: `input`,
                name: `name`,
                message: `Please enter the Intern's name.`,
            },
            {
                type: `input`,
                name: `id`,
                message: `Please enter the Intern's ID.`,
            },
            {
                type: `input`,
                name: `email`,
                message: `Please enter the Intern's email.`
            },
            {
                type: `input`,
                name: `school`,
                message: `Please enter the Intern's school.`
            },
        ]).then(internData => {
            const { name, id, email, school } = internData;
            const intern = new Intern(name, id, email, school);

            memberArray.push(intern);
            addMember()
        })
}