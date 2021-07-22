import EmployeeFactory from '../components/EmployeeFactory'

class API {
	static getEmployees = () => {
		return fetch('/employees')
			.then((res) => res.json())
			.then((data) => {
				let employeeList = data.employees.map((employee) => {
					return new EmployeeFactory(employee)
				})
				return employeeList
			})
			.catch((error) => {
				console.log(error)
			})
	}

	static searchEmployees = (search) => {
		return fetch('/employees', {
			method: 'POST',
			body: JSON.stringify({ query: search }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				let employeeList = data.employees.map((employee) => {
					return new EmployeeFactory(employee)
				})
				return employeeList
			})
			.catch((error) => {
				console.log(error)
			})
	}

	static createEmployee = (employee) => {
		const Employee = new EmployeeFactory(employee)
		return fetch('/employee-create', {
			method: 'POST',
			body: JSON.stringify({ employee: Employee }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	static updateEmployee = (Employee) => {
		return fetch('/employee-update', {
			method: 'POST',
			body: JSON.stringify({ employee: Employee }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	static deleteEmployee = (Employee) => {
		return fetch('/employee-delete', {
			method: 'POST',
			body: JSON.stringify({ employee: Employee }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
			})
			.catch((error) => {
				console.log(error)
			})
	}
}

export default API
