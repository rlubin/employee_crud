import React, { useState, useEffect } from 'react'
import Employee from './components/Employee'
import Table from './components/Table'
import NavBar from './components/NavBar'
import API from './resources/API'
import CreateForm from './components/CreateForm'

const App = () => {
	const [employees, setEmployees] = useState([])
	const employeeTableColumns = Employee.employeeTableColumns()
	const employeeSortOptions = Employee.employeeSortOptions()
	const [sort, setSort] = useState(employeeSortOptions[0].value)
	const [search, setSearch] = useState('')

	const searchEmployees = (query) => {
		setSearch(() => setSearch(query))
		setSort(() => setSort(sort))
	}

	const sortEmployees = (sort) => {
		setSort(() => setSort(sort))
	}

	// useEffect(() => {
	// 	async function anonFunc() {
	// 		const employeesList = await API.getEmployees()
	// 		setEmployees(() => setEmployees(employeesList))
	// 	}
	// 	anonFunc()
	// }, [])

	useEffect(() => {
		async function anonFunc() {
			const employeesList = await API.searchEmployees(search)
			setEmployees(() => setEmployees(employeesList))
		}
		anonFunc()
	}, [search])

	useEffect(() => {
		const sortParams = sort.split('-')
		let employeesList = Employee.sortEmployees(
			employees,
			sortParams[0],
			sortParams[1]
		)
		setEmployees(() => setEmployees(employeesList))
	}, [sort]) // throws a warning, however can't add employees to dependency list

	const createEmployee = (object) => {
		API.createEmployee(object)
	}

	return (
		<div>
			<NavBar
				search={searchEmployees}
				sort={sortEmployees}
				sortState={sort}
				sortOptions={employeeSortOptions}></NavBar>
			<Table columns={employeeTableColumns} rows={employees}></Table>
			<CreateForm
				create={createEmployee}
				genders={Employee.employeeGenders()}></CreateForm>
		</div>
	)
}

export default App
