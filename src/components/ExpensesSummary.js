import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import getVisibleExpenses from "../selectors/expenses";
import getTotalValues from "../selectors/expense-total";

export const ExpensesSummary = ({ length, total }) => {
  const expenseWord = length > 1 ? "expenses" : "expense";
  const formattedTotal = numeral(total / 100).format("$0,0.00");
  return (
    <div>
      <h1>
        {length} {expenseWord} totaling of {formattedTotal}
      </h1>
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
