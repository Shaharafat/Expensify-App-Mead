import React from "react";
import { shallow } from "enzyme";

import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };

  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      expense={expenses[2]}
      history={history}
    />
  );
});

// 🧪 edit expense
test("should render EditExpense page", () => {
  expect(wrapper).toMatchSnapshot();
});

// 🧪 handle editExpense
test("should handle editExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[1]);
});

// 🧪 handle removeExpense
test("should handle remove expense", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[2]);
});
