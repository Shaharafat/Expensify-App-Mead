import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import numeral from "numeral";
import getVisibleExpenses from "../selectors/expenses";
import getTotalValues from "../selectors/expense-total";

export const ExpensesSummary = ({ length, total }) => {
  const expenseWord = length > 1 ? "expenses" : "expense";
  const formattedTotal = numeral(total / 100).format("$0,0.00");
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          <span>{length} </span>
          {expenseWord} totaling of
          <span> {formattedTotal} </span>
        </h1>
        <div class="page-header__actions">
          <Link className="button" to="/create" >Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    length: visibleExpenses.length,
    total: getTotalValues(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
