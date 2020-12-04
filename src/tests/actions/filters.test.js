import moment from 'moment';
import {setStartDate, setEndDate,setTextFilter,sortByDate,sortByAmount} from '../../actions/filters'

// 🧪 start date
test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

// 🧪 end date
test('should generate set end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0),
  })
})

// 🧪 set text
test('should generate set text action object with no data', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    updateText: ''
  })
}) 

test('should generate set text action object with new data', () => {
  const action = setTextFilter('new Text');
  expect(action).toEqual({
    
    type: 'SET_TEXT_FILTER',
    updateText: 'new Text'
  })
}) 

// 🧪 sort by date
test('should change sort by date action object ', () => {
  type:'SORT_BY_DATE'
})

// 🧪 sort by amount
test('should change sort by amount action object ', () => {
  type:'SORT_BY_AMOUNT'
})