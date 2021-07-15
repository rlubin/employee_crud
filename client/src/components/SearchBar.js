import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '50ch',
			verticalAlign: 'middle',
		},
	},
	button: {
		width: '15ch',
	},
}))

const SearchBar = (props) => {
	const classes = useStyles()
	const [search, setSearch] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()
		props.search(search)
	}

	return (
		<form
			className={classes.root}
			noValidate
			autoComplete='off'
			onSubmit={handleSubmit}>
			<Box alignItems='center' display='flex' justifyContent='center'>
				<TextField
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<SearchIcon />
							</InputAdornment>
						),
					}}
					variant='outlined'
					value={search}
					onInput={(e) => setSearch(e.target.value)}
				/>
				<Button
					className={classes.button}
					variant='contained'
					color='primary'
					onClick={handleSubmit}
					size='large'>
					Search
				</Button>
			</Box>
		</form>
	)
}

export default SearchBar
