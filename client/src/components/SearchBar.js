import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
}))

export default function BasicTextFields(props) {
	const classes = useStyles()
	const [search, setSearch] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(search)
		props.search(search)
	}

	return (
		<form
			className={classes.root}
			noValidate
			autoComplete='off'
			onSubmit={handleSubmit}>
			<TextField
				id='outlined-basic'
				label='Search'
				variant='outlined'
				value={search}
				onInput={(e) => setSearch(e.target.value)}
			/>
		</form>
	)
}
