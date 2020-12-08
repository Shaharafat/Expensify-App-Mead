import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

// 🧪 default
test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

// 🧪 remove expense
test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// 🧪 add expense
test("should add an expense", () => {
  const newExpense = {
    id: "4",
    description: "Coffee Bill",
    note: "",
    amount: 2500,
    createdAt: moment(0).add(10, "days").valueOf(),
  };

  const action = {
    type: "ADD_EXPENSE",
    expense: newExpense,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

// 🧪 edit expense
test("should edit and expense", () => {
  const amount = 500
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[2].id,
    updates: {
      note: "note has been edited",
      amount
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state[2].amount).toEqual(amount);
});

test('should not edit expense if id not found', () => {
  const amount = 500
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      note: "note has been edited",
      amount,
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
  
})

// 🧪 set expense
test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses : [expenses[1]]
  }
  const result = expensesReducer(expenses,action)
  expect(result).toEqual([expenses[1]]);

})
