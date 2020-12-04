import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

// 🧪 remove expense
test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

// 🧪 edit expense
test("should edit an existing expense", () => {
  const action = editExpense("123abcd", {
    description: "new expense",
    note: "new note",
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abcd",
    updates: { description: "new expense", note: "new note" },
  });
});

// 🧪 add expense
test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 1000,
    note: "This was last months rent",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should setup and expense action object  with default values ", () => {
  // add expense with no data
  const expenseData = {
  description : "",
  note : "",
  amount : 0,
  createdAt : 0,
}
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE', 
    expense: {
      ...expenseData,
      id: expect.any(String),
    }
  })
});
