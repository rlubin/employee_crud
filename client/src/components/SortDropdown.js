import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: '17.5ch',
	},
}))

const SortDropdown = (props) => {
	const classes = useStyles()
	const [sort, setSort] = useState(props.sortState)

	const handleChange = (event) => {
		setSort(() => setSort(event.target.value))
		props.sort(event.target.value)
	}

	return (
		<FormControl variant='outlined' className={classes.formControl}>
			<InputLabel>Sort</InputLabel>
			<Select value={sort} onChange={handleChange} label='Sort'>
				{props.sortOptions.map((object, key) => (
					<MenuItem key={key} value={object.value}>
						{object.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

SortDropdown.propTypes = {
	sort: PropTypes.func.isRequired,
	sortState: PropTypes.string.isRequired,
	sortOptions: PropTypes.array.isRequired,
}

export default SortDropdown
