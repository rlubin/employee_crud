import Search from '@material-ui/icons/Search'
import React, { useState, useEffect } from 'react'
import Employee from './components/Employee'
import SearchBar from './components/SearchBar'
import Table from './components/Table'

const App = () => {
	const [employees, setEmployees] = useState([])
	const [sort, setSort] = useState('id-asc')

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

	const search = (query) => {
		// const search = document.getElementById('search').value
		const search = query
		fetch('/employees', {
			method: 'POST',
			body: JSON.stringify({ query: search }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
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
	}

	return (
		<div>
			<SearchBar search={search}></SearchBar>
			{/* <input type='text' id='search' placeholder='search...'></input>
			<button onClick={search}>Search</button> */}
			{/* <label>Sort</label>
			<select id='select'>
				<option value='id-asc'>Id Ascending</option>
				<option value='id-desc'>Id Descending</option>
				<option value='first-name-asc'>First Name Ascending</option>
				<option value='first-name-desc'>First Name Descending</option>
				<option value='last-name-asc'>Last Name Ascending</option>
				<option value='last-name-desc'>Last Name Descending</option>
			</select> */}
			<Table rows={employees}></Table>
		</div>
	)
}

export default App
