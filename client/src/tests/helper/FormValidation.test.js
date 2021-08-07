import FormValidation from '../../helper/FormValidation'
import Employee from '../../helper/Employee'

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
