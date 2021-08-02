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

	// constructor(id, first_name, last_name, email, gender, salary, job_title) {
	// 	this._id = id
	// 	this._first_name = first_name
	// 	this._last_name = last_name
	// 	this._email = email
	// 	this._gender = gender
	// 	this._salary = salary
	// 	this._job_title = job_title
	// }

	// get id() {
	// 	return this._id
	// }

	// get first_name() {
	// 	return this._first_name
	// }

	// get last_name() {
	// 	return this._last_name
	// }

	// get email() {
	// 	return this._email
	// }

	// get gender() {
	// 	return this._gender
	// }

	// get salary() {
	// 	return this._salary
	// }

	// get job_title() {
	// 	return this._job_title
	// }

	// set id(value) {
	// 	return this._id
	// }

	// set first_name(value) {
	// 	this._first_name = value
	// }

	// set last_name(value) {
	// 	this._last_name = value
	// }

	// set email(value) {
	// 	this._email = value
	// }

	// set gender(value) {
	// 	this._gender = value
	// }

	// set salary(value) {
	// 	this._salary = value
	// }

	// set job_title(value) {
	// 	this._job_title = value
	// }

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

	static lowerCase = (property) => {
		if (isNaN(property)) return property.toLowerCase()
		return property
	}

	static sortEmployees = (employeeList, property, direction) => {
		if (direction === 'asc') {
			return employeeList.sort((employee1, employee2) =>
				this.lowerCase(employee1[property]) >
				this.lowerCase(employee2[property])
					? 1
					: this.lowerCase(employee1[property]) <
					  this.lowerCase(employee2[property])
					? -1
					: 0
			)
		} else {
			return employeeList.sort((employee1, employee2) =>
				this.lowerCase(employee1[property]) <
				this.lowerCase(employee2[property])
					? 1
					: this.lowerCase(employee1[property]) >
					  this.lowerCase(employee2[property])
					? -1
					: 0
			)
		}
	}
}

export default Employee
