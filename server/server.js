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

app.get('/employees', (req, res) => {
	connection.query('SELECT * FROM employees', (error, results, fields) => {
		if (error) console.log(error)
		console.log(`/employees ${Date()}`)
		res.json({ employees: results })
	})
})

app.post('/employees', (req, res) => {
	connection.query('SELECT * FROM employees', (error, results, fields) => {
		if (error) console.log(error)
		console.log(`/employees ${Date()}`)
		res.json({ employees: results })
	})
})

app.listen(PORT, () => {
	console.log(`server running on localhost:${PORT}`)
})
