import FormValidation from '../../helper/FormValidation'

test('validateEmail() - testing valid email', () => {
	const test = FormValidation.validateEmail('email@gmail.com')
	expect(test).toBe(true)
})

test('validateEmail() - testing invalid email', () => {
	const tests = [
		'@gmail.com',
		'email@.com',
		'email@gmail.',
		'@.com',
		'@.',
		'@',
		'.',
	]
	const results = Array(tests.length).fill(false)
	for (let i = 0; i < tests.length; i++) {
		const test = FormValidation.validateEmail(tests[i])
		expect(test).toBe(results[i])
	}
})

test('validateEmployeeInput() - testing valid employee', () => {
	const test = FormValidation.validateEmployeeInput(
		'first',
		'last',
		'email@gmail.com',
		'0'
	)
	expect(test).toStrictEqual([])
})

test('validateEmployeeInput() - testing invalid employee', () => {
	const tests = [['', '', '@gmail.com', '-1']]
	const results = [
		['first_nameError', 'last_nameError', 'emailError', 'salaryError'],
	]
	for (let i = 0; i < tests.length; i++) {
		const test = FormValidation.validateEmployeeInput(
			tests[i][0],
			tests[i][1],
			tests[i][2],
			tests[i][3]
		)
		expect(test).toStrictEqual(results[i])
	}
})
