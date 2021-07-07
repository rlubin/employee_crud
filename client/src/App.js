import React, { useState, useEffect } from 'react'
import Employee from './components/Employee'
import SearchBar from './components/SearchBar'
import Table from './components/Table'

const App = () => {
	const [employees, setEmployees] = useState([])

	useEffect(() => {
		fetch('/employees')
			.then((res) => res.json())
			.then((data) => {
				let employees_list = data.employees.map((employee) => {
					return new Employee(
						employee.id,
						employee.first_name,
						employee.last_name,
						employee.email,
						employee.gender,
						employee.salary,
						employee.job_title
					)
				})
				setEmployees(() => setEmployees(employees_list))
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	return (
		<div>
			<SearchBar></SearchBar>
			<Table rows={employees}></Table>
		</div>
	)
}

export default App
