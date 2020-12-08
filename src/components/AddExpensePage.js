import React from "react";
import { connect } from "react-redux";
import { startAddExpenses } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

export class AddExpensePage extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(expense) {
    this.props.startAddExpenses(expense);
    this.props.history.push("/");
  }
  
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpenses: (expenses) => dispatch(startAddExpenses(expenses)),
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
