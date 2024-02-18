import Manager from "./lib/Manager";
import Engineer from "./lib/Engineer";
import Intern from "./lib/Intern";
import inquirer from "inquirer";
import { resolve, join } from "path";
import fs from "fs";

const OUTPUT_DIR = resolve(__dirname, "output");
const outputPath = join(OUTPUT_DIR, "team.html");

import render from "./src/page-template.js";


// TODO: Write Code to gather information about the development team members, and render the HTML file.

