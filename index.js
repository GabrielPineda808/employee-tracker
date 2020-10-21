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
  }).then(res => {
    switch(res.type){
      case "View All Employees":
        viewEmployee();
        break;
      case "View Departments":
        viewDepartment();
        break;
      case "View Employee Roles":
        viewRoles();
        break;
      case "Add Employee":
        addEmployee();
        break;
      case "Add Department":
        addDepartment();
        break;
      case "Add Employee Role":
        addRole();
        break;
      case "Update Employee Roles":
        updateRole();
        break;
      
    }
  })
}
