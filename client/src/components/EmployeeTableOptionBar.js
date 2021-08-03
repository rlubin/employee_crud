import React from 'react'
import SearchBar from './SearchBar'
import SortDropdown from './SortDropdown'
import Grid from '@material-ui/core/Grid'
import CreateEmployeeForm from './CreateEmployeeForm'
import { makeStyles } from '@material-ui/core/styles'

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
				<CreateEmployeeForm
					create={props.create}
					genders={props.genders}></CreateEmployeeForm>
			</Grid>
		</Grid>
	)
}

export default EmployeeTableOptionBar
