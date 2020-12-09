import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { firebase } from "./firebase/firebase";

import "../node_modules/normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

import { startSetExpenses } from "./actions/expenses";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 4500 }));
store.dispatch(addExpense({ description: "Gas bill", createdAt: 1000 }));
store.dispatch(addExpense({ description: "Rent", amount: 10900 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    });
  } else {
    renderApp()
    history.push("/");
  }
});

console.log(hasRendered);