import React from 'react'
import SearchBar from './SearchBar'
import SortDropdown from './SortDropdown'
import Grid from '@material-ui/core/Grid'
import CreateEmployeeForm from './CreateEmployeeForm'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
	root: {
		verticalAlign: 'middle',
	},
	textField: {
		margin: theme.spacing(1),
		minWidth: '10ch',
		maxWidth: '50ch',
	},
}))

const EmployeeTableOptionBar = (props) => {
	const classes = useStyles()
	return (
		<Grid container>
			<Grid item>
				<SearchBar search={props.search}></SearchBar>
			</Grid>
			<Grid item>
				<SortDropdown
					className={classes.textField}
					sort={props.sort}
					sortState={props.sortState}
					sortOptions={props.sortOptions}></SortDropdown>
			</Grid>
			<Grid item>
				<CreateEmployeeForm create={props.create}></CreateEmployeeForm>
			</Grid>
		</Grid>
	)
}

EmployeeTableOptionBar.propTypes = {
	search: PropTypes.func.isRequired,
	sort: PropTypes.func.isRequired,
	sortState: PropTypes.string.isRequired,
	sortOptions: PropTypes.array.isRequired,
	create: PropTypes.func.isRequired,
}

export default EmployeeTableOptionBar
