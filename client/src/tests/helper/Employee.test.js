import Employee from '../../helper/Employee'

test('Employee() - testing constructor', () => {
	const test = new Employee('', '', '', '', '', '', '')
	expect(test).toEqual({
		id: '',
		first_name: '',
		last_name: '',
		email: '',
		gender: '',
		salary: '',
		job_title: '',
	})
})

test('Employee.employeeGenders() - verifying genders', () => {
	const test = Employee.employeeGenders()
	expect(test).toEqual([
		'Male',
		'Female',
		'Bigender',
		'Polygender',
		'Genderqueer',
		'Genderfluid',
		'Non-binary',
		'Agender',
	])
})

// test('Employee.employeeTableColumns() - testing table columns', () => {
// 	const test = Employee.employeeTableColumns()
// 	expect(test).toEqual([
// 		{ name: 'Id', width: 50, value: 'id' },
// 		{ name: 'First name', width: 75, value: 'first_name' },
// 		{ name: 'Last name', width: 75, value: 'last_name' },
// 		{ name: 'Email', width: 160, value: 'email' },
// 		{ name: 'Gender', width: 50, value: 'gender' },
// 		{ name: 'Salary', width: 50, value: 'salary' },
// 		{ name: 'Job title', width: 160, value: 'job_title' },
// 	])
// })

test('Employee.employeeSortOptions() - verifying options', () => {
	const test = Employee.employeeSortOptions()
	expect(test).toEqual([
		{ label: 'Id Ascending', value: 'id-asc' },
		{ label: 'Id Descending', value: 'id-desc' },
		{ label: 'First name Ascending', value: 'first_name-asc' },
		{ label: 'First name Descending', value: 'first_name-desc' },
		{ label: 'Last name Ascending', value: 'last_name-asc' },
		{ label: 'Last name Descending', value: 'last_name-desc' },
	])
})

test('Employee.lowerCase() - tesing valid input', () => {
	const tests = ['john', 'John', 'JOHN', '1001', 'John1']
	const results = ['john', 'john', 'john', '1001', 'john1']
	for (let i = 0; i < tests.length; i++) {
		const test = Employee.lowerCase(tests[i])
		expect(test).toBe(results[i])
	}
})

test('Employee.sortOptions() - tesing valid outputs', () => {
	const tests = [
		'id-asc',
		'id-desc',
		'first_name-asc',
		'first_name-desc',
		'last_name-asc',
		'last_name-desc',
	]
	const results = [
		{ property: 'id', direction: 'asc' },
		{ property: 'id', direction: 'desc' },
		{ property: 'first_name', direction: 'asc' },
		{ property: 'first_name', direction: 'desc' },
		{ property: 'last_name', direction: 'asc' },
		{ property: 'last_name', direction: 'desc' },
	]
	for (let i = 0; i < tests.length; i++) {
		const test = Employee.sortOptions(tests[i])
		expect(test).toStrictEqual(results[i])
	}
})

test('Employee.sortEmployees() - testing order', () => {
	const employee1 = new Employee('', '', '', '', '', '', '')
	const employee2 = new Employee('', '', '', '', '', '', '')
	const employee3 = new Employee('', '', '', '', '', '', '')
	const employees = [employee1, employee2, employee3]
	const sorts = []
	const results = []
	for (let i = 0; i < sorts.length; i++) {
		const test = Employee.sortEmployees(employees, sorts[i])
		expect(test).toBe(results[i])
	}
})
