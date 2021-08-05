import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Employee from '../helper/Employee'
import EmployeeForm from './EmployeeForm'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(1),
	},
}))

const FormDialog = (props) => {
	const classes = useStyles()
	const [open, setOpen] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleSubmit = (employee) => {
		props.create(employee)
		setOpen(false)
	}

	return (
		<div className={classes.root}>
			<Button
				variant='contained'
				color='primary'
				onClick={handleClickOpen}
				size='large'>
				Create
			</Button>
			<EmployeeForm
				employee={new Employee('', '', '', '', '', '', '')}
				submit={handleSubmit}
				open={open}
				setOpen={setOpen}
				formType='Create'></EmployeeForm>
		</div>
	)
}

FormDialog.propTypes = {
	create: PropTypes.func.isRequired,
}

export default FormDialog
