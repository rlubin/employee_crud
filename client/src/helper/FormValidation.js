class FormValidation {
	static validateEmail = (string) => {
		const re = /^\S+@\S+\.\S+$/
		return re.test(String(string).toLowerCase())
	}

	static validateEmployeeInput = (first_name, last_name, email, salary) => {
		let errors = []
		if (first_name === '') errors.push('first_nameError')
		if (last_name === '') errors.push('last_nameError')
		if (email === '' || !this.validateEmail(email)) errors.push('emailError')
		if (Number(salary) < 0 || isNaN(Number(salary))) errors.push('salaryError')
		return errors
	}
}

export default FormValidation
