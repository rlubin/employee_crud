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
		`SELECT * FROM employees WHERE id LIKE ? OR first_name LIKE ? OR last_name LIKE ? OR email LIKE ? OR gender LIKE ? OR salary LIKE ? OR job_title LIKE ?`,
		Array(7).fill(`%${query}%`),
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
					if (error) {
						console.log(error)
						res.json({ result: 'fail' })
					}
					console.log('employee created')
					res.json({ result: 'success' })
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
		`UPDATE employees SET id=?, first_name=?, last_name=?, email=?, salary=?, job_title=? WHERE id=?`,
		[
			employee['id'],
			employee['first_name'],
			employee['last_name'],
			employee['email'],
			employee['salary'],
			employee['job_title'],
			employee['id'],
		],
		(error, results, fields) => {
			if (error) {
				console.log(error)
				res.json({ result: 'fail' })
			}
			console.log('employee edited')
			res.json({ result: 'success' })
		}
	)
})

app.post('/employee-delete', (req, res) => {
	console.log(`POST /employees-delete ${Date()}`)
	console.log(req.body)
	const employee = req.body.employee
	connection.query(
		`DELETE FROM employees WHERE id=?`,
		[employee.id],
		(error, results, fields) => {
			if (error) {
				console.log(error)
				res.json({ result: 'fail' })
			}
			console.log('employee deleted')
			res.json({ result: 'success' })
		}
	)
})

app.listen(PORT, () => {
	console.log(`server running on localhost:${PORT}`)
})
