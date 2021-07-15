class Employee {
	constructor(id, first_name, last_name, email, gender, salary, job_title) {
		this.id = id
		this.first_name = first_name
		this.last_name = last_name
		this.email = email
		this.gender = gender
		this.salary = salary
		this.job_title = job_title
	}

	static employeeGenders = () => {
		return [
			'Male',
			'Female',
			'Bigender',
			'Polygender',
			'Genderqueer',
			'Genderfluid',
			'Non-binary',
			'Agender',
		]
	}

	static employeeTableColumns = () => {
		return [
			{ name: 'Id', width: 50, value: 'id' },
			{ name: 'First name', width: 75, value: 'first_name' },
			{ name: 'Last name', width: 75, value: 'last_name' },
			{ name: 'Email', width: 160, value: 'email' },
			{ name: 'Gender', width: 50, value: 'gender' },
			{ name: 'Salary', width: 50, value: 'salary' },
			{ name: 'Job title', width: 160, value: 'job_title' },
		]
	}

	static employeeSortOptions = () => {
		return [
			{ label: 'Id Ascending', value: 'id-asc' },
			{ label: 'Id Descending', value: 'id-desc' },
			{ label: 'First name Ascending', value: 'first_name-asc' },
			{ label: 'First name Descending', value: 'first_name-desc' },
			{ label: 'Last name Ascending', value: 'last_name-asc' },
			{ label: 'Last name Descending', value: 'last_name-desc' },
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
