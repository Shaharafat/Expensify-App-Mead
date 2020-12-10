import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  startAddExpenses,
  addExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } }
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expenseData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expenseData[id] = { description, note, amount, createdAt };
    database
      .ref(`users/${uid}/expenses`)
      .set(expenseData)
      .then(() => done());
  });
});

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
  const store = createMockStore(defaultAuthState);
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
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense with defaults to database and store", (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseDefaults = {
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
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});

// 🧪 set expense
test("should setup set expenses action object with database", () => {
  const result = setExpenses(expenses);
  expect(result).toEqual({
    type: "SET_EXPENSES",
    expenses,
  });
});

test("should fetch the expenses from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses,
    });
    done();
  });
});

test("should remove expenses from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  store
    .dispatch(startRemoveExpense(expenses[1]))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_EXPENSE",
        id: expenses[1].id,
      });
      return database.ref(`users/${uid}/expenses/${expenses[1].id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

test("should edit expenses from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[1].id;
  const updates = {
    note: "updated notes",
    description: "new description for this expense",
  };
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "EDIT_EXPENSE",
      id,
      updates,
    });
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .once("value")
      .then((snapshot) => {
        expect(snapshot.val().note).toBe(updates.note);
        done()
      });
  });
});
