# Employee CRUD

## Description

Web app that allows you to CRUD on a database of Employees.

## Setup

### Requirements

1. Have [MySQL](https://dev.mysql.com/downloads/) installed
2. Have [Node](https://nodejs.org/en/) installed

### Database

1. Create a new table using db/create_employees.sql
2. Populate the table using db/insert_employees.sql
</ol>

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
