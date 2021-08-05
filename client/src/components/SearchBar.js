import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
	textField: {
		margin: theme.spacing(1),
		minWidth: '17.5ch',
	},
	button: {
		margin: theme.spacing(1),
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
		<Grid container>
			<form noValidate autoComplete='off' onSubmit={handleSubmit}>
				<TextField
					className={classes.textField}
					label='Search'
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
			</form>
		</Grid>
	)
}

SearchBar.propTypes = {
	search: PropTypes.func.isRequired,
}

export default SearchBar
