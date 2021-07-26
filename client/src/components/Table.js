import React, { useState } from 'react'
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
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import API from '../resources/API'

const useStyles1 = makeStyles((theme) => ({
	root: {
		flexShrink: 0,
		marginLeft: theme.spacing(2.5),
	},
	margin: {
		margin: theme.spacing(1),
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

const useStyles2 = makeStyles({
	table: {
		minWidth: 875,
	},
})

const CustomPaginationActionsTable = (props) => {
	const classes = useStyles2()
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(5)
	const rows = props.rows

	const emptyRows =
		rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
	}

	const handleEdit = (key) => {
		alert('edit')
		console.log(
			`edit pageSize:${rowsPerPage}, page:${page}, key:${key}, row:${
				page * rowsPerPage + key
			}, employee:${Object.keys(rows[page * rowsPerPage + key])}, id:${
				rows[page * rowsPerPage + key]['id']
			}, first_name:${
				rows[page * rowsPerPage + key]['first_name']
			}, last_name:${rows[page * rowsPerPage + key]['last_name']}, email:${
				rows[page * rowsPerPage + key]['email']
			}, gender:${rows[page * rowsPerPage + key]['gender']}, salary:${
				rows[page * rowsPerPage + key]['salary']
			}, job_title:${rows[page * rowsPerPage + key]['job_title']}
			`
		)
	}

	const handleDelete = (key) => {
		alert('delete')
		const object = rows[page * rowsPerPage + key]
		console.log(
			`delete pageSize:${rowsPerPage}, page:${page}, key:${key}, row:${
				page * rowsPerPage + key
			}, employee:${Object.keys(object)}, id:${object['id']}, first_name:${
				object['first_name']
			}, last_name:${object['last_name']}, email:${object['email']}, gender:${
				object['gender']
			} , salary:${object['salary']} , job_title:${object['job_title']}
			`
		)
		const newEmployee = {
			id: object['id'],
			first_name: object['first_name'],
			last_name: object['last_name'],
			email: object['email'],
			gender: object['gender'],
			salary: object['salary'],
			job_title: object['job_title'],
		}
		API.deleteEmployee(newEmployee)
	}

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label='custom pagination table'>
				<TableHead>
					<TableRow>
						{props.columns.map((object, key) => (
							<TableCell key={key} style={{ width: object.width }}>
								{object.name}
							</TableCell>
						))}
						<TableCell style={{ width: 31 }}></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{(rowsPerPage > 0
						? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						: rows
					).map((row, key) => (
						<TableRow key={key}>
							{props.columns.map((object) => (
								<TableCell
									key={`${key}${object.value}`}
									style={{ width: object.width }}
									scope='row'>
									{row[object.value]}
								</TableCell>
							))}
							<TableCell>
								<IconButton
									onClick={() => handleEdit(key)}
									aria-label='edit'
									className={classes.margin}
									size='small'>
									<EditIcon fontSize='inherit' />
								</IconButton>
								<IconButton
									onClick={() => handleDelete(key)}
									aria-label='delete'
									className={classes.margin}
									size='small'>
									<DeleteIcon fontSize='inherit' />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
					{emptyRows > 0 && (
						<TableRow style={{ height: 53 * emptyRows }}>
							<TableCell colSpan={9} />
						</TableRow>
					)}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TablePagination
							rowsPerPageOptions={[5, 10, 25, 100, { label: 'All', value: -1 }]}
							colSpan={7}
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
	)
}

export default CustomPaginationActionsTable
