class Employee {
	constructor(id, firstName, lastName, email, gender, salary, jobTitle) {
		this.id = id
		this.firstName = firstName
		this.lastName = lastName
		this.email = email
		this.gender = gender
		this.salary = salary
		this.jobTitle = jobTitle
	}

	static employeeTableColumns = () => {
		return [
			{ name: 'Id', width: 50, value: 'id' },
			{ name: 'First name', width: 75, value: 'firstName' },
			{ name: 'Last name', width: 75, value: 'lastName' },
			{ name: 'Email', width: 160, value: 'email' },
			{ name: 'Gender', width: 50, value: 'gender' },
			{ name: 'Salary', width: 50, value: 'salary' },
			{ name: 'Job title', width: 160, value: 'jobTitle' },
		]
	}

	static employeeSortOptions = () => {
		return [
			{ label: 'Id Ascending', value: 'id-asc' },
			{ label: 'Id Descending', value: 'id-desc' },
			{ label: 'First name Ascending', value: 'firstName-asc' },
			{ label: 'First name Descending', value: 'firstName-desc' },
			{ label: 'Last name Ascending', value: 'lastName-asc' },
			{ label: 'Last name Descending', value: 'lastName-desc' },
		]
	}

	static sortEmployees = (employeeList, property, direction) => {
		if (direction === 'asc') {
			return employeeList.sort((employee1, employee2) =>
				employee1[property] > employee2[property]
					? 1
					: employee1[property] < employee2[property]
					? -1
					: 0
			)
		} else {
			return employeeList.sort((employee1, employee2) =>
				employee1[property] < employee2[property]
					? 1
					: employee1[property] > employee2[property]
					? -1
					: 0
			)
		}
	}
}

export default Employee
