import selectExpensesTotal from '../../selectors/expense-total.js'
import expenses from '../fixtures/expenses'

test('should render 0 if no expenses', () => {
  expect(selectExpensesTotal([])).toBe(0)
})

test('should correctly ad up a single expense', () => {
  const res = selectExpensesTotal([expenses[0]])
  expect(res).toBe(195)
})

test('should correctly add up multiple expenses', () => {
  expect(selectExpensesTotal(expenses)).toBe(114195)
})
