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

	// constructor(employee) {
	//   this.id = employee.id
	// 	this.first_name = employee.first_name
	// 	this.last_name = employee.last_name
	// 	this.email = employee.email
	// 	this.gender = employee.gender
	// 	this.salary = employee.salary
	// 	this.job_title = employee.job_title
	// }

	display = () => {
		return (
			<p key={this.id}>
				{this.id} {this.first_name} {this.last_name} {this.email} {this.gender}{' '}
				{this.salary} {this.job_title}
			</p>
		)
	}
}

export default Employee
