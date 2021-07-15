require('dotenv').config()
const PORT = 5000
const mysql = require('mysql')
const express = require('express')
const app = express()

const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: 'employee-crud',
})

connection.connect((error) => {
	if (error) {
		console.log(`error connecting ${error.stack}`)
		return
	}
	console.log(`connected as id ${connection.threadId}`)
})

app.use(express.json()) // for parsing application/json

app.get('/employees', (req, res) => {
	console.log(`GET /employees ${Date()}`)
	connection.query('SELECT * FROM employees', (error, results, fields) => {
		if (error) console.log(error)
		res.json({ employees: results })
	})
})

app.post('/employees', (req, res) => {
	console.log(`POST /employees ${Date()}`)
	console.log(req.body)
	const query = req.body.query
	connection.query(
		`SELECT * FROM employees WHERE id LIKE '%${query}%' OR first_name LIKE '%${query}%' OR last_name LIKE '%${query}%' OR email LIKE '%${query}%' OR gender LIKE '%${query}%' OR salary LIKE '%${query}%' OR job_title LIKE '%${query}%'`,
		(error, results, fields) => {
			if (error) console.log(error)
			res.json({ employees: results })
		}
	)
})

app.post('/employee-create', (req, res) => {
	console.log(`POST /employees-update ${Date()}`)
	console.log(req.body)
	const employee = req.body.employee
	const column = `MAX(id)`
	connection.query(
		`SELECT ${column} FROM employees`,
		(error, results, fields) => {
			if (error) console.log(error)
			connection.query(
				`INSERT INTO employees VALUES (?, ?, ?, ?, ?, ?, ?)`,
				[
					results[0][column] + 1,
					employee.first_name,
					employee.last_name,
					employee.email,
					employee.gender,
					employee.salary,
					employee.job_title,
				],
				(error, results, fields) => {
					if (error) console.log(error)
					console.log('employee created')
				}
			)
		}
	)
})

app.post('/employee-update', (req, res) => {
	console.log(`POST /employees-update ${Date()}`)
	console.log(req.body)
	const employee = req.body.employee
	connection.query(
		`UPDATE FROM employees WHERE id='%${query}%'`,
		(error, results, fields) => {
			if (error) console.log(error)
			res.json({ employees: results })
		}
	)
})

app.listen(PORT, () => {
	console.log(`server running on localhost:${PORT}`)
})
