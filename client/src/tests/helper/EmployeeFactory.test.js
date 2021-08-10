import EmployeeFactory from '../../helper/EmployeeFactory'
import Employee from '../../helper/Employee'

test('EmployeeFactory() - testing valid inputs', () => {
	const employee = {
		id: '',
		first_name: '',
		last_name: '',
		email: '',
		gender: '',
		salary: '',
		job_title: '',
	}
	const test = EmployeeFactory(employee)
	// expect(test).toEqual({
	// 	id: '',
	// 	first_name: '',
	// 	last_name: '',
	// 	email: '',
	// 	gender: '',
	// 	salary: '',
	// 	job_title: '',
	// })
	expect(test).toEqual(new Employee('', '', '', '', '', '', ''))
})
