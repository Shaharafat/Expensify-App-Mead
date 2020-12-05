import React from 'react'
import {shallow} from 'enzyme'

import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

// 🧪 test ExpenseForm and used mock library here
test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

// 🧪 Expense form
test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
  expect(wrapper).toMatchSnapshot()
})

