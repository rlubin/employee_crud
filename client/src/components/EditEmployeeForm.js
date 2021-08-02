import React, { useState } from 'react'
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
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

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
	const [open, setOpen] = useState(false)
	const employee = props.employee
	const [first_name, setFirstName] = useState(employee['first_name'])
	const [last_name, setLastName] = useState(employee['last_name'])
	const [email, setEmail] = useState(employee['email'])
	const [gender, setGender] = useState(employee['gender'])
	const [salary, setSalary] = useState(employee['salary'])
	const [job_title, setJobTitle] = useState(employee['job_title'])
	const [first_nameError, setFirstNameError] = useState(false)
	const [last_nameError, setLastNameError] = useState(false)
	const [emailError, setEmailError] = useState(false)
	const [salaryError, setSalaryError] = useState(false)
	const [first_nameHelperText, setFirstNameHelperText] = useState(null)
	const [last_nameHelperText, setLastNameHelperText] = useState(null)
	const [emailHelperText, setEmailHelperText] = useState(null)
	const [salaryHelperText, setSalaryHelperText] = useState(null)

	const handleClickOpen = () => {
		setOpen(true)
		setFirstName(employee['first_name'])
		setLastName(employee['last_name'])
		setEmail(employee['email'])
		setGender(employee['gender'])
		setSalary(employee['salary'])
		setJobTitle(employee['job_title'])
		setFirstNameError(false)
		setFirstNameHelperText(null)
		setLastNameError(false)
		setLastNameHelperText(null)
		setEmailError(false)
		setEmailHelperText(null)
		setSalaryError(false)
		setSalaryHelperText(null)
	}

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

	const validateEmail = (string) => {
		const re = /^\S+@\S+\.\S+$/
		return re.test(String(string).toLowerCase())
	}

	const isFormValid = () => {
		let errors = []
		if (first_name === '') errors.push('first_nameError')
		if (last_name === '') errors.push('last_nameError')
		if (email === '' || !validateEmail(email)) errors.push('emailError')
		if (Number(salary) < 0 || isNaN(Number(salary))) errors.push('salaryError')
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
			alert('employee editted')
		} else {
			return
		}
		const newEmployee = {
			id: '1',
			first_name: first_name,
			last_name: last_name,
			email: email,
			gender: gender,
			salary: salary,
			job_title: job_title,
		}
		// props.edit(newEmployee)
		props.edit(props.employeeIndex, newEmployee)
		setOpen(false)
	}

	return (
		<div className={classes.root}>
			<IconButton onClick={handleClickOpen} aria-label='edit' size='small'>
				<EditIcon fontSize='inherit' />
			</IconButton>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Edit</DialogTitle>
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
						{props.genders.map((gender) => (
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
						Edit
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default FormDialog
