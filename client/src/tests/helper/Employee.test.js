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

test('Employee.employeeTableColumns() - has name and value properties', () => {
	const test = Employee.employeeTableColumns()
	expect(test).toMatchObject([
		{ name: 'Id', value: 'id' },
		{ name: 'First name', value: 'first_name' },
		{ name: 'Last name', value: 'last_name' },
		{ name: 'Email', value: 'email' },
		{ name: 'Gender', value: 'gender' },
		{ name: 'Salary', value: 'salary' },
		{ name: 'Job title', value: 'job_title' },
	])
})

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

test('Employee.sortEmployees() - testing sorting order', () => {
	const employee1 = new Employee(
		'1',
		'John',
		'Smith',
		'jsmith@hotmail.com',
		'Male',
		'1000',
		'CEO'
	)
	const employee2 = new Employee(
		'10',
		'George',
		'Tomson',
		'gtomson@gmail.com',
		'Genderqueer',
		'2344',
		'Grunt'
	)
	const employee3 = new Employee(
		'100',
		'Jennifer',
		'Aniston',
		'jenani@ston.co.uk',
		'Agender',
		'1',
		'Kitchen'
	)
	const employees = [employee1, employee2, employee3]
	const sorts = [
		'id-asc',
		'id-desc',
		'first_name-asc',
		'first_name-desc',
		'last_name-asc',
		'last_name-desc',
	]
	const results = [
		[employee1, employee2, employee3],
		[employee3, employee2, employee1],
		[employee2, employee3, employee1],
		[employee1, employee3, employee2],
		[employee3, employee1, employee2],
		[employee2, employee1, employee3],
	]
	for (let i = 0; i < sorts.length; i++) {
		const test = Employee.sortEmployees(employees, sorts[i])
		expect(test).toStrictEqual(results[i])
	}
})
