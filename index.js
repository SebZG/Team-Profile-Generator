// modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
// classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// utils
const render = require("./src/page-template.js");

const OUTPUT_DIR = path.resolve(__dirname, "./output/");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamMembers = [];

const promptManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the team manager's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the team manager's email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the team manager's office number?",
    },
  ]);
}

const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the engineer's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineer's email?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineer's github?",
    },
  ]);
}

const promptInern = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the intern's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the intern's email?",
    },
    {
      type: "input",
      name: "school",
      message: "What is the intern's school?",
    },
  ]);
}

const promptAddTeamMembers = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "addTeamMembers",
      message: "Select type of team member to add",
      choices: ["Engineer", "Intern", "None"],
    }
  ]);
}

const init = async () => {

  try {
    const managerData = await promptManager();
    const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
    teamMembers.push(manager);

    let addMoreTeamMembers = true;
    while (addMoreTeamMembers) {
      const { addTeamMembers } = await promptAddTeamMembers();
      if (addTeamMembers === "Engineer") {
        const engineerData = await promptEngineer();
        const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
        teamMembers.push(engineer);
      } else if (addTeamMembers === "Intern") {
        const internData = await promptInern();
        const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
        teamMembers.push(intern);
      } else {
        addMoreTeamMembers = false;
      }
    }

    const html = render(teamMembers);
    fs.writeFileSync(outputPath, html);
    console.log(`Team profile generated at ./output/team.html`);
  } catch (error) {
    console.error(error);
  }

}

init();