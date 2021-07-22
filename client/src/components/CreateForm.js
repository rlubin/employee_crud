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
	const [first_name, setFirstName] = useState('')
	const [last_name, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [gender, setGender] = useState(props.genders[0])
	const [salary, setSalary] = useState('')
	const [job_title, setJobTitle] = useState('')
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
		const re = /^\S+@\S+.\S+$/
		return re.test(String(string).toLowerCase())
	}

	const isFormValid = () => {
		let errors = []
		if (first_name === '') errors.push('first_nameError')
		if (last_name === '') errors.push('last_nameError')
		if (email === '' || !validateEmail(email)) errors.push('emailError') // check if valid email
		if (Number(salary) < 0 || isNaN(Number(salary))) errors.push('salaryError') // check salary must be greater than or equal to 0
		for (let error of errors) {
			console.log(`${error}`)
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

	const sanitizeForm = () => {}

	const handleSubmit = () => {
		// BUG WHERE EMPLOYEE ADDS AGAIN AFTER 2M AFTER CREATING ONE THEN FETCH FAILS
		console.log('CreateForm.js handleSubmit()')
		if (isFormValid()) {
			alert('employee added')
		} else {
			alert('form error')
			return
		}
		sanitizeForm()
		const newEmployee = {
			id: '1',
			first_name: first_name,
			last_name: last_name,
			email: email,
			gender: gender,
			salary: salary,
			job_title: job_title,
		}
		props.create(newEmployee)
		setOpen(false)
	}

	return (
		<div className={classes.root}>
			<Button variant='contained' color='primary' onClick={handleClickOpen}>
				Create
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Create</DialogTitle>
				<DialogContent>
					<TextField
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
						onChange={handleLastNameChange}
						label='Last Name'
						required
						variant='outlined'
						className={classes.textField}
						error={last_nameError}
						helperText={last_nameHelperText}
					/>
					<TextField
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
						onChange={handleSalaryChange}
						fullWidth
						label='Salary'
						variant='outlined'
						className={classes.textField}
						error={salaryError}
						helperText={salaryHelperText}
					/>
					<TextField
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
						Create
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default FormDialog
