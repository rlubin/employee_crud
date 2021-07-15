import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
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

export default SortDropdown
