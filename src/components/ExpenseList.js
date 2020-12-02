import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
const ExpenseList = (props) => (
  <div>
    Expense List
    {
      props.expenses.map(expense => (
        <ExpenseListItem key={expense.id} {...expense} />
      ))
    }
  </div>
)

const mapStateToProps = (state) => {
  return {
    // expenses: state.expenses,
    // filters: state.filters
    expenses: selectExpenses(state.expenses,state.filters),
  }
}

export default connect(mapStateToProps)(ExpenseList)
