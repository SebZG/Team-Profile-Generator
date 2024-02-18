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

