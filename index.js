var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "password",
  database: "employeeDB"
});

connection.connect(function(err) {
  if (err) throw err;
  Start();
});

function Start(){
  inquirer.prompt({
    type: "list",
    message: "What do you want to do?",
    name: "nextStep",
    choices: [
      {
        name: "View All Employees"
      },
      {
        name: "View Departments"
      },
      {
        name: "View Employee Roles"
      },
      {
        name: "Add Employee"
      },
      {
        name: "Add Department"
      },
      {
        name: "Add Employee Role"
      },
      {
        name: "Update Employee Roles"
      }
    ]
  });
}