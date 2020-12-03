import React, { Component } from "react";
import 'react-dates/initialize'
import moment from 'moment' 
import { SingleDatePicker } from 'react-dates'  
import 'react-dates/lib/css/_datepicker.css'

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.state = {
      description: "",
      note: "",
      amount: "",
      createdAt: moment(), 
      calenderFocused:false,
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

  onDateChange(createdAt) {
    this.setState(() =>  ({createdAt}))
  }

  onFocusChange({focused}) {
    this.setState(() =>({calenderFocused: focused }) )
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

          {/* Single datepicker */}
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
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
