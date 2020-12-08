import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  startAddExpenses,
  addExpense,
  editExpense,
  removeExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

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
  const action = addExpense(expenses[1]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[1],
  });
});

test("should add expense to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "This one is better",
    createdAt: 1000,
  };

  store
    .dispatch(startAddExpenses(expenseData))
    .then(() => {
      const actions = store.getActions();
      console.log(actions);
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense with defaults to database and store", () => {
  const store = createMockStore({});
  const expenseDefaults= {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0,
  };

  store
    .dispatch(startAddExpenses())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseDefaults,
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});

// test("should setup and expense action object  with default values ", () => {
//   // add expense with no data
//   const expenseData = {
//   description : "",
//   note : "",
//   amount : 0,
//   createdAt : 0,
// }
//   const action = addExpense()
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       ...expenseData,
//       id: expect.any(String),
//     }
//   })
// });
