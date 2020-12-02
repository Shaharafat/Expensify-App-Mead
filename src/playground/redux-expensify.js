import { createStore, combineReducers } from "redux";

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// ✅ expense reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// ✅ filter reducer
const filterReducerDefaultState = {
  text: "",
  sortBy: "",
  startDate: undefined,
  endDate: undefined,
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default: return state;
  }
}

// ✅ store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,

    filters: filterReducer
  })
);

console.log(store.getState());

const demoState = {
  expenses: [
    {
      id: "sdfsdfgsdf",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
