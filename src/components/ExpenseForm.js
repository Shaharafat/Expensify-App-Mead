import React, { Component } from "react";

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.state = {
      description: "",
      note: "",
      amount: "",
    };
  }

  onDescriptionChange(e) {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  onNoteChange(e) {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }

  onAmountChange(e) {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
    this.setState(() => ({amount}))

    } 
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />

          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}          

          />

          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
