import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import EmployeeForm from './EmployeeForm'

const FormDialog = (props) => {
	const [open, setOpen] = useState(false)
	const employee = props.employee

	const handleClickOpen = () => {
		setOpen(true)
		console.log(props)
	}

	// const handleClose = () => {
	// 	setOpen(false)
	// }

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

export default FormDialog
