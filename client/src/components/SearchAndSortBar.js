import React from 'react'
import SearchBar from './SearchBar'
import SortBar from './SortBar'
import Box from '@material-ui/core/Box'

const SearchAndSortBar = (props) => {
	return (
		<Box alignItems='center' display='flex' justifyContent='center'>
			<SearchBar search={props.search}></SearchBar>
			<SortBar sort={props.sort} sortOptions={props.sortOptions}></SortBar>
		</Box>
	)
}

export default SearchAndSortBar
