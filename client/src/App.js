import React, { useState, useEffect } from 'react'
import Employee from './components/Employee'
import Table from './components/Table'
import SearchAndSortBar from './components/SearchAndSortBar'
import API from './resources/API'

const App = () => {
	const [employees, setEmployees] = useState([])
	const employeeTableColumns = Employee.employeeTableColumns()
	const employeeSortOptions = Employee.employeeSortOptions()
	const [sort, setSort] = useState(employeeSortOptions[0].value)
	const [search, setSearch] = useState('')

	const searchEmployees = (query) => {
		setSearch(() => setSearch(query))
	}

	const sortEmployees = (sort) => {
		setSort(() => setSort(sort))
	}

	useEffect(() => {
		async function anonFunc() {
			const employeesList = await API.getEmployees()
			setEmployees(() => setEmployees(employeesList))
		}
		anonFunc()
	}, [])

	useEffect(() => {
		async function anonFunc() {
			if (search === '') return
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

	return (
		<div>
			<SearchAndSortBar
				search={searchEmployees}
				sort={sortEmployees}
				sortOptions={employeeSortOptions}></SearchAndSortBar>
			<Table columns={employeeTableColumns} rows={employees}></Table>
		</div>
	)
}

export default App
