const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let teamArray = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// https://www.npmjs.com/package/inquirer/v/0.2.3

const createEmployee = () =>
  inquirer
    .prompt([
      {
        type: "checkbox",
        message: "Select Employee Role",
        name: "role",
        choices: [
          {
            name: "Engineer",
          },
          {
            name: "Manager",
          },
          {
            name: "Intern",
          },
        ],
      },
    ])
    // Use user feedback for... whatever!!
    // will require conditional statement based on "role" selectio to run additional inquirer.prompt function
    // applied "toString()" so that the value I was comparing against was a string as opposed to an array
    .then((answers) => {
      console.log(answers.role.toString());
      if (answers.role.toString() === "Engineer") {
        engineerQuestions();
      }
      if (answers.role.toString() === "Manager") {
        managerQuestions();
      }
      if (answers.role.toString() === "Intern") {
        internQuestions();
      }
    });

const engineerQuestions = () =>
  inquirer
    .prompt(
      /* Pass your questions in here */
      [
        {
          type: "input",
          message: "Enter Employee Name",
          name: "name",
        },
        {
          type: "input",
          message: "Enter Employee Id",
          name: "id",
        },
        {
          type: "input",
          message: "Enter Employee Email",
          name: "email",
        },
        {
          type: "input",
          message: "Enter GitHub UserName",
          name: "github",
        },
      ]
    )
    .then((answers) => {
      teamArray.push(answers.name, answers.id, answers.email, answers.github);
      console.log(teamArray);
    })
    .then((answers) => {
      addAnotherEmployee();
    });

const managerQuestions = () =>
  inquirer
    .prompt(
      /* Pass your questions in here */
      [
        {
          type: "input",
          message: "Enter Employee Name",
          name: "name",
        },
        {
          type: "input",
          message: "Enter Employee Id",
          name: "id",
        },
        {
          type: "input",
          message: "Enter Employee Email",
          name: "email",
        },
        {
          type: "input",
          message: "Enter Office Number",
          name: "officeNumber",
        },
      ]
    )
    .then((answers) => {
      teamArray.push(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      console.log(teamArray);
    })
    .then((answers) => {
      addAnotherEmployee();
    });

const internQuestions = () =>
  inquirer
    .prompt(
      /* Pass your questions in here */
      [
        {
          type: "input",
          message: "Enter Employee Name",
          name: "name",
        },
        {
          type: "input",
          message: "Enter Employee Id",
          name: "id",
        },
        {
          type: "input",
          message: "Enter Employee Email",
          name: "email",
        },
        {
          type: "input",
          message: "Enter School Intern is Currently Attending",
          name: "school",
        },
      ]
    )
    .then((answers) => {
      teamArray.push(answers.name, answers.id, answers.email, answers.school);
      console.log(teamArray);
    })
    .then((answers) => {
      addAnotherEmployee();
    });

// Asks the user if they want to add another employee
const addAnotherEmployee = () =>
  inquirer
    .prompt(
      /* Pass your questions in here */
      [
        {
          type: "confirm",
          message: "Would you like to add another employee?",
          name: "choice",
        },
      ]
    )
    .then((val) => {
      console.log(val);
      if (val.choice === true) {
        createEmployee();
      } else {
        //will need to run render function at this point
      }
    });

// calling the main function so that it runs
createEmployee();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
