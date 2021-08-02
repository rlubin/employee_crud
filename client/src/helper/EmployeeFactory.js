import Employee from './Employee'

function EmployeeFactory(employee) {
	return new Employee(
		employee.id,
		employee.first_name,
		employee.last_name,
		employee.email,
		employee.gender,
		employee.salary,
		employee.job_title
	)
}

export default EmployeeFactory
