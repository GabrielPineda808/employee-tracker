CREATE employeeDB;

USE employeeDB;

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(45),
    last_name VARCHAR(45),
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN  KEY (manager_id) REFERENCES employees(id),
    FOREIGN  KEY (role_id) REFERENCES role(id)
);

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    salary INT NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
)


SELECT * FROM employees;
SELECT * FROM department;
SELECT * FROM roles;

