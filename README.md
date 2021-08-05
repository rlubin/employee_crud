# Employee CRUD

## Description

Web app that allows you to CRUD on a database of Employees.

## Technologies

- Frontend: ReactJS, Material UI
- Backend: NodeJS, Express, MySQL
- Database: MySQL

## Setup

### Requirements

1. Have [MySQL](https://dev.mysql.com/downloads/) installed
2. Have [Node](https://nodejs.org/en/) installed

### Database

1. Create a new table using db/create_employees.sql
2. Populate the table using db/insert_employees.sql

### Server

1. Alter DB_HOST, DB_USER and DB_PASS in server/.env to MySQL info
2. Open new terminal, navigate to /server

- Run `npm i`
- Run `npm start`

### Client

1. Open new terminal, navigate to /client

- Run `npm i`
- Run `npm start`

## Testing

### Server

1. Navigate to /server
2. Run `npm test`

### Client

1. Navigate to /client
2. Run `npm test`

## Security Considerations

### SQL Injection

Input to search bar, creation of employees and editing employees is inserted to a SQL query on the server. It is possible that users can type SQL commands into these areas, however I have used parameter bindings in the queries to ensure that user input will not be interpreted as SQL commands.

### Cross Site Scripting

Most employee fields are a result of user input and will be visible by anyone using the site, it is possible to type scripts. Malicious text added to employee fields will automatically be escaped by React when being rendered; meaning user input will be interpreted as text and not HTML.

## User Input

There is some bacis validation of user input on create and edit forms. You can't create or edit an employee without having a first name, last name, email of the form email@provider.extension and a number larger than 0 as the salary.

## How It Looks

![](screenshots/table.png 'Table')
![](screenshots/create.png 'Create')
![](screenshots/edit.png 'Edit')
