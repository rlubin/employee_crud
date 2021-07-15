import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const FormDialog = (props) => {
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleSubmit = () => {
		setOpen(false)
		const object = {
			id: '1',
			first_name: 'first_name',
			last_name: 'last_name',
			email: 'email',
			gender: 'gender',
			salary: 'salary',
			job_title: 'job_title',
		}
		console.log('Form handleSubmit object')
		console.table(Object.entries(object))
		props.create(object)
	}

	return (
		<div>
			<Button variant='outlined' color='primary' onClick={handleClickOpen}>
				Create
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Create</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin='dense'
						label='First Name'
						type='email'
						fullWidth
					/>
					<TextField
						autoFocus
						margin='dense'
						label='Last Name'
						type='email'
						fullWidth
					/>
					<TextField
						autoFocus
						margin='dense'
						label='Email'
						type='email'
						fullWidth
					/>
					<TextField
						autoFocus
						margin='dense'
						label='Gender'
						type='email'
						fullWidth
					/>
					<TextField
						autoFocus
						margin='dense'
						label='Salary'
						type='email'
						fullWidth
					/>
					<TextField
						autoFocus
						margin='dense'
						label='Job Title'
						type='email'
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button onClick={handleSubmit} color='primary'>
						Subscribe
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default FormDialog
