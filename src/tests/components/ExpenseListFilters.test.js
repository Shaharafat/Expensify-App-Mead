import React from 'react'
import moment from 'moment'
import {shallow} from 'enzyme'

import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filters, altFilters} from '../fixtures/filters'

let setTextFilter, sortByDate, setStartDate, setEndDate, sortByAmount, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  sortByAmount = jest.fn();
  wrapper = shallow(<ExpenseListFilters
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
    sortByAmount={sortByAmount}
    filters={filters}
  />)
})

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt da correctly', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
  const value='updated text'
  wrapper.find('input').simulate('change',{target:{value}})
  expect(setTextFilter).toHaveBeenCalledWith(value)
})

test('should sort by date', () => {
  const value = 'date'
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find('select').simulate('change',{target:{value}})
  expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
  const value = 'amount'
  wrapper.find('select').simulate('change',{target:{value}})
  expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date changes', () => {
  const startDate = moment(0).add(2,'days')
  const endDate = moment(0).add(5,'days')
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate })
  expect(setStartDate).toHaveBeenCalledWith(startDate)
  expect(setEndDate).toHaveBeenCalledWith(endDate)
})

test('should handle date focus changes', () => {
  const calenderFocused = 'endDate'
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calenderFocused)
  expect(wrapper.state('calenderFocused')).toBe(calenderFocused)
})


