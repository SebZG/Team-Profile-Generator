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