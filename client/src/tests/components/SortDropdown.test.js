import React from 'react'
import renderer from 'react-test-renderer'
import SortDropdown from '../../components/SortDropdown'
import Employee from '../../helper/Employee'

test('SortDropdown component - renders correctly', () => {
	const component = renderer.create(
    <SortDropdown sort={} sortState={} sortOptions={}></SortDropdown>,
  );
})
