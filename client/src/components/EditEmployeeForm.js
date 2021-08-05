import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import Employee from '../helper/Employee'
import EmployeeForm from './EmployeeForm'
import PropTypes from 'prop-types'

const FormDialog = (props) => {
	const [open, setOpen] = useState(false)
	const employee = props.employee

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleSubmit = (employee) => {
		props.edit(props.employeeIndex, employee)
		setOpen(false)
	}

	return (
		<>
			<IconButton onClick={handleClickOpen} aria-label='edit' size='small'>
				<EditIcon fontSize='inherit' />
			</IconButton>
			<EmployeeForm
				employee={employee}
				submit={handleSubmit}
				open={open}
				setOpen={setOpen}
				formType='Edit'></EmployeeForm>
		</>
	)
}

FormDialog.propTypes = {
	employee: PropTypes.instanceOf(Employee).isRequired,
	employeeIndex: PropTypes.number.isRequired,
	edit: PropTypes.func.isRequired,
}

export default FormDialog
