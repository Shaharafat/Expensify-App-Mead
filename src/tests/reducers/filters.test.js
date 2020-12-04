import moment from "moment";
import filtersReducer from "../../reducers/filters";

// 🧪 default
test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

// 🧪 sort by amount
test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

// 🧪 sort by date
test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount",
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);

  expect(state.sortBy).toBe("date");
});

// 🧪 set text filter
test("should set text filter", () => {
  const text = "new updated text";
  const action = {
    type: "SET_TEXT_FILTER",
    updateText: text,
  };

  const result = filtersReducer(undefined, action);
  expect(result.text).toBe(text);
});

// 🧪 start date filter
test("should set startDate filter", () => {
  const date = moment(0).add(5, "days");
  const action = {
    type: "SET_START_DATE",
    startDate: date,
  };
  const result = filtersReducer(undefined, action);
  expect(result.startDate).toBe(date);
});

// 🧪 end date filter 
test('should set endDate filter ', () => {
  const date = moment(0).add(5, 'days');
  const action = {
    type: 'SET_END_DATE',
    endDate: date,
  }

  const result = filtersReducer(undefined, action);
  expect(result.endDate).toBe(date)
})
