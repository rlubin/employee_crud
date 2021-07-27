import React from 'react'
import SearchBar from './SearchBar'
import SortDropdown from './SortDropdown'
import Box from '@material-ui/core/Box'
import CreateEmployeeForm from './CreateEmployeeForm'

const EmployeeTableOptionBar = (props) => {
	return (
		<Box alignItems='center' display='flex' justifyContent='center'>
			<SearchBar search={props.search}></SearchBar>
			<SortDropdown
				sort={props.sort}
				sortState={props.sortState}
				sortOptions={props.sortOptions}></SortDropdown>
			<CreateEmployeeForm
				create={props.create}
				genders={props.genders}></CreateEmployeeForm>
		</Box>
	)
}

export default EmployeeTableOptionBar
