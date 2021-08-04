import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import FirstPageIcon from '@material-ui/icons/FirstPage'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import LastPageIcon from '@material-ui/icons/LastPage'
import DeleteIcon from '@material-ui/icons/Delete'
import API from '../helper/API'
import Employee from '../helper/Employee'
import EmployeeTableOptionBar from './EmployeeTableOptionBar'
import EditEmployeeForm from './EditEmployeeForm'

const useStyles1 = makeStyles((theme) => ({
	root: {
		flexShrink: 0,
		marginLeft: theme.spacing(2.5),
	},
}))

const TablePaginationActions = (props) => {
	const classes = useStyles1()
	const theme = useTheme()
	const { count, page, rowsPerPage, onPageChange } = props

	const handleFirstPageButtonClick = (event) => {
		onPageChange(event, 0)
	}

	const handleBackButtonClick = (event) => {
		onPageChange(event, page - 1)
	}

	const handleNextButtonClick = (event) => {
		onPageChange(event, page + 1)
	}

	const handleLastPageButtonClick = (event) => {
		onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
	}

	return (
		<div className={classes.root}>
			<IconButton
				onClick={handleFirstPageButtonClick}
				disabled={page === 0}
				aria-label='first page'>
				{theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
			</IconButton>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label='previous page'>
				{theme.direction === 'rtl' ? (
					<KeyboardArrowRight />
				) : (
					<KeyboardArrowLeft />
				)}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label='next page'>
				{theme.direction === 'rtl' ? (
					<KeyboardArrowLeft />
				) : (
					<KeyboardArrowRight />
				)}
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label='last page'>
				{theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
			</IconButton>
		</div>
	)
}

TablePaginationActions.propTypes = {
	count: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
}

const CustomPaginationActionsTable = (props) => {
	const [employees, setEmployees] = useState([])
	const employeeTableColumns = Employee.employeeTableColumns()
	const employeeSortOptions = Employee.employeeSortOptions()
	const [sort, setSort] = useState(employeeSortOptions[0].value)
	const [search, setSearch] = useState('')
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(5)
	const columns = employeeTableColumns
	const rows = employees === undefined ? [] : employees

	const emptyRows =
		rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
	}

	// useEffect(() => {
	// 	async function anonFunc() {
	// 		const employeesList = await API.getEmployees()
	// 		setEmployees(() => setEmployees(employeesList))
	// 	}
	// 	anonFunc()
	// }, [])

	const sortEmployees = (employees) => {
		const sortParams = sort.split('-')
		const employeesSorted = Employee.sortEmployees(
			employees,
			sortParams[0],
			sortParams[1]
		)
		return employeesSorted
	}

	useEffect(() => {
		const employeesList = sortEmployees(employees)
		setEmployees(() => setEmployees(employeesList))
	}, [employees])

	useEffect(() => {
		async function anonFunc() {
			const employeesList = await API.searchEmployees(search)
			setEmployees(() => setEmployees(employeesList))
		}
		anonFunc()
		setPage(0)
	}, [search])

	useEffect(() => {
		const employeesList = sortEmployees(employees)
		setEmployees(() => setEmployees(employeesList))
	}, [sort]) // throws a warning, however can't add employees to dependency list

	const searchEmployees = (query) => {
		setSearch(() => setSearch(query))
	}

	const setSortOption = (sort) => {
		setSort(() => setSort(sort))
	}

	const handleCreate = (employeeToCreate) => {
		employeeToCreate.id = employees[employees.length - 1].id + 1
		API.createEmployee(employeeToCreate)
		setEmployees([...employees, employeeToCreate])
	}

	const handleEdit = (index, employeeToEdit) => {
		const newEmployees = [...employees]
		const id = newEmployees[index].id
		newEmployees[index] = employeeToEdit
		newEmployees[index].id = id
		setEmployees(newEmployees)
		API.updateEmployee(employeeToEdit)
	}

	const handleDelete = (key) => {
		const emplpoyeeToDel = employees[page * rowsPerPage + key]
		const length = employees.length - 2
		setEmployees(
			employees.filter((employee) => employee.id !== emplpoyeeToDel.id)
		)
		API.deleteEmployee(emplpoyeeToDel)
		// if delete last employee on a table page move to new last page
		const maxPageNumber = Math.floor(length / rowsPerPage)
		if (page > maxPageNumber) setPage(page - 1)
		alert('employee deleted')
	}

	return (
		<>
			<TableContainer component={Paper}>
				<EmployeeTableOptionBar
					search={searchEmployees}
					sort={setSortOption}
					sortState={sort}
					sortOptions={employeeSortOptions}
					create={handleCreate}
					genders={Employee.employeeGenders()}></EmployeeTableOptionBar>
				<Table aria-label='custom pagination table'>
					<TableHead>
						<TableRow>
							{columns.map((object, key) => (
								<TableCell key={key} style={{ width: object.width }}>
									{object.name}
								</TableCell>
							))}
							<TableCell style={{ width: 2 }}></TableCell>
							<TableCell style={{ width: 2 }}></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{(rowsPerPage > 0
							? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							: rows
						).map((row, key) => (
							<TableRow key={key}>
								{columns.map((object) => (
									<TableCell
										key={`${key}${object.value}`}
										style={{ width: object.width }}
										scope='row'>
										{row[object.value]}
									</TableCell>
								))}
								<TableCell>
									<EditEmployeeForm
										edit={handleEdit}
										employeeIndex={page * rowsPerPage + key}
										employee={employees[page * rowsPerPage + key]}
										genders={Employee.employeeGenders()}></EditEmployeeForm>
								</TableCell>
								<TableCell>
									<IconButton
										onClick={() => handleDelete(key)}
										aria-label='delete'
										size='small'>
										<DeleteIcon fontSize='inherit' />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
						{emptyRows > 0 && (
							<TableRow style={{ height: 53 * emptyRows }}>
								<TableCell colSpan={columns.length + 2} />
							</TableRow>
						)}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TablePagination
								rowsPerPageOptions={[
									5,
									10,
									25,
									100,
									{ label: 'All', value: -1 },
								]}
								colSpan={columns.length + 2}
								count={rows.length}
								rowsPerPage={rowsPerPage}
								page={page}
								SelectProps={{
									inputProps: { 'aria-label': 'rows per page' },
									native: true,
								}}
								onPageChange={handleChangePage}
								onRowsPerPageChange={handleChangeRowsPerPage}
								ActionsComponent={TablePaginationActions}
							/>
						</TableRow>
					</TableFooter>
				</Table>
			</TableContainer>
		</>
	)
}

export default CustomPaginationActionsTable
