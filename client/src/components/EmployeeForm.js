import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import { makeStyles } from '@material-ui/core/styles'
import FormValidation from '../helper/FormValidation'
import Employee from '../helper/Employee'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		margin: theme.spacing(1),
	},
}))

const FormDialog = (props) => {
	const classes = useStyles()
	const open = props.open
	const setOpen = props.setOpen
	const employee = props.employee
	const [first_name, setFirstName] = useState(employee.first_name)
	const [last_name, setLastName] = useState(employee.last_name)
	const [email, setEmail] = useState(employee.email)
	const [gender, setGender] = useState(
		props.formType === 'Create'
			? Employee.employeeGenders()[0]
			: props.employee.gender
	)
	const [salary, setSalary] = useState(employee.salary)
	const [job_title, setJobTitle] = useState(employee.job_title)
	const [first_nameError, setFirstNameError] = useState(false)
	const [last_nameError, setLastNameError] = useState(false)
	const [emailError, setEmailError] = useState(false)
	const [salaryError, setSalaryError] = useState(false)
	const [first_nameHelperText, setFirstNameHelperText] = useState(null)
	const [last_nameHelperText, setLastNameHelperText] = useState(null)
	const [emailHelperText, setEmailHelperText] = useState(null)
	const [salaryHelperText, setSalaryHelperText] = useState(null)

	useEffect(() => {
		setFirstName(employee.first_name)
		setLastName(employee.last_name)
		setEmail(employee.email)
		setGender(
			props.formType === 'Create'
				? Employee.employeeGenders()[0]
				: props.employee.gender
		)
		setSalary(employee.salary)
		setJobTitle(employee.job_title)
		setFirstNameError(false)
		setFirstNameHelperText(null)
		setLastNameError(false)
		setLastNameHelperText(null)
		setEmailError(false)
		setEmailHelperText(null)
		setSalaryError(false)
		setSalaryHelperText(null)
	}, [open]) // eslint-disable-line react-hooks/exhaustive-deps

	const handleClose = () => {
		setOpen(false)
	}

	const handleFirstNameChange = (event) => {
		setFirstName(event.target.value)
		setFirstNameError(false)
		setFirstNameHelperText(null)
	}

	const handleLastNameChange = (event) => {
		setLastName(event.target.value)
		setLastNameError(false)
		setLastNameHelperText(null)
	}

	const handleEmailChange = (event) => {
		setEmail(event.target.value)
		setEmailError(false)
		setEmailHelperText(null)
	}

	const handleGenderChange = (event) => {
		setGender(event.target.value)
	}

	const handleSalaryChange = (event) => {
		setSalary(event.target.value)
		setSalaryError(false)
		setSalaryHelperText(null)
	}

	const handleJobTitleChange = (event) => {
		setJobTitle(event.target.value)
	}

	const isFormValid = () => {
		let errors = FormValidation.validateEmployeeInput(
			first_name,
			last_name,
			email,
			salary
		)
		for (let error of errors) {
			if (error === 'first_nameError') {
				setFirstNameError(true)
				setFirstNameHelperText('Input first name.')
			}
			if (error === 'last_nameError') {
				setLastNameError(true)
				setLastNameHelperText('Input last name.')
			}
			if (error === 'emailError') {
				setEmailError(true)
				setEmailHelperText('Input valid email "youremail@gmail.com".')
			}
			if (error === 'salaryError') {
				setSalaryError(true)
				setSalaryHelperText('Input a positive number.')
			}
		}
		if (errors.length === 0) return true
		return false
	}

	const handleSubmit = () => {
		if (isFormValid()) {
			if (props.formType === 'Edit') alert('Employee edited')
			if (props.formType === 'Create') alert('Employee created')
		} else {
			return
		}
		const newEmployee = new Employee(
			'1',
			first_name,
			last_name,
			email,
			gender,
			salary,
			job_title
		)
		props.submit(newEmployee)
	}

	return (
		<div className={classes.root}>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>{props.formType}</DialogTitle>
				<DialogContent>
					<TextField
						value={first_name}
						autoFocus
						onChange={handleFirstNameChange}
						label='First Name'
						required
						variant='outlined'
						className={classes.textField}
						error={first_nameError}
						helperText={first_nameHelperText}
					/>
					<TextField
						value={last_name}
						onChange={handleLastNameChange}
						label='Last Name'
						required
						variant='outlined'
						className={classes.textField}
						error={last_nameError}
						helperText={last_nameHelperText}
					/>
					<TextField
						value={email}
						onChange={handleEmailChange}
						label='Email'
						fullWidth
						required
						variant='outlined'
						className={classes.textField}
						error={emailError}
						helperText={emailHelperText}
					/>
					<InputLabel>Gender</InputLabel>
					<Select
						value={gender}
						onChange={handleGenderChange}
						variant='outlined'>
						{Employee.employeeGenders().map((gender) => (
							<MenuItem key={gender} value={gender}>
								{gender}
							</MenuItem>
						))}
					</Select>
					<TextField
						value={salary}
						onChange={handleSalaryChange}
						fullWidth
						label='Salary'
						variant='outlined'
						className={classes.textField}
						error={salaryError}
						helperText={salaryHelperText}
					/>
					<TextField
						value={job_title}
						onChange={handleJobTitleChange}
						label='Job Title'
						fullWidth
						variant='outlined'
						className={classes.textField}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button onClick={handleSubmit} color='primary'>
						{props.formType}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default FormDialog
