const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const questions = [
  "Name:",
  "Employee ID:",
  "Email:",
  "Office number:",
  "GitHub:",
  "School:",
  "Add another team member?",
];

const [
  namePrompt,
  idPrompt,
  emailPrompt,
  officeNumberPrompt,
  githubPrompt,
  schoolPrompt,
  addMemberPrompt,
] = questions;

const NAME_PROMPT = {
  type: "input",
  name: "name",
  message: namePrompt,
};

const ID_PROMPT = {
  type: "input",
  name: "id",
  message: idPrompt,
};

const EMAIL_PROMPT = {
  type: "input",
  name: "email",
  message: emailPrompt,
};

const ADD_PROMPT = {
  type: "list",
  name: "addMember",
  message: addMemberPrompt,
  choices: ["Add Engineer", "Add Intern", "Finish Building team"],
};

const init = async () => {
  console.log("Please enter the team Manager's details");
  const { name, id, email, officeNumber, addMember } = await inquirer.prompt([
    NAME_PROMPT,
    ID_PROMPT,
    EMAIL_PROMPT,
    {
      type: "input",
      name: "officeNumber",
      message: officeNumberPrompt,
    },
    ADD_PROMPT,
  ]);

  new Manager(name, id, email, officeNumber);

//   if(addMember)
};

init()