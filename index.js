var mysql = require("mysql");
var inquirer = require("inquirer");
const { on } = require("nodemon");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "password",
  database: "employeeDB"
});
console.log("hello")
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
      
        "View All Employees",
        "View Departments",
        "View Employee Roles",
        "Add Employee",
        "Add Department",
        "Add Employee Role",
        "Update Employee Roles"
    ],
    name:  "choice"   
  }).then(res => {
    switch(res.choice){
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

function viewEmployee(){
  
}

function viewDepartment(){
  
}

function viewRoles(){
  
}

function addEmployee(){
  inquirer.prompt([{
    type: "input",
    message: "Enter the First name: ",
    name: "first"
  },
  {
    type: "input",
    message: "Enter the last name: ",
    name: "last"
  },
  {
    type: "input",
    message: "Enter the Role ID: ",
    name: "role"
  },
  {
    type: "input",
    message: "Enter the Manager ID: ",
    name: "manager"
  }
  ]).then(res=>{
    connection.query(
      "INSERT INTO employees SET ?",
      {
        first_name: res.first,
        last_name: res.last,
        role_id: res.role,
        manager_id: res.manager
      },
      Start()
    )
  })
}

function addDepartment(){
  
}

function addRole(){
  
}

function updateRole(){
  
}