import React from "react";
import { connect } from "react-redux";
import { editExpense, startRemoveExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

export class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);
    this.editExpense = this.editExpense.bind(this);
    this.removeExpense = this.removeExpense.bind(this);
  }

  editExpense(expense) {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  }

  removeExpense() {
    this.props.startRemoveExpense(this.props.expense);
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.editExpense} />
        <button onClick={this.removeExpense}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  startRemoveExpense: (expense) => dispatch(startRemoveExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
