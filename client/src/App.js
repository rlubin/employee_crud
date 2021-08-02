import React from 'react'
import EmployeeTable from './components/EmployeeTable'
import Box from '@material-ui/core/Box'

const App = () => {
	return (
		<>
			<Box display='flex' m={1}>
				<EmployeeTable></EmployeeTable>
			</Box>
		</>
	)
}

export default App
