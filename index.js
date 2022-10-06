const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML")

const memberArray = [];
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

            makeFile(...memberArray)
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
                message: `Please enter the Manager's office number.`
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
            memberArray.push(new Engineer(engineerData));
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


function makeFile(...memberArray) {
    fs.writeFile('mynewfile3.html', `<head>  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></head>
    <body>
    <div class="card">
  <p> Manager: ${memberArray[0].name}</p>
  <p> ID: ${memberArray[0].id}</p>
  <p> Email: ${memberArray[0].email}</p>
  <p> Office Number: ${memberArray[0].officeNumber}</p>
</div>
<div class="card">
<p> Engineer: ${memberArray[1].name}</p>
<p> ID: ${memberArray[1].id}</p>
<p> Email: ${memberArray[1].email}</p>
<p> Github: ${memberArray[1].github}</p>
</div>
<div class="card">
<p> Intern: ${memberArray[2].name}</p>
<p> ID: ${memberArray[2].id}</p>
<p> Email: ${memberArray[2].email}</p>
<p> School: ${memberArray[2].school}</p>
</div>
    </body>


`, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}