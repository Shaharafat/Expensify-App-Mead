import { createStore } from "redux";
// createStore is a function.

const incrementCount = (payload = {}) => ({
  type: "INCREMENT",
  incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1,
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        count: state.count + action.incrementBy,
      };
    }
    case "DECREMENT": {
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy,
      };
    }
    case "RESET": {
      return {
        count: 0,
      };
    }
    case "SET": {
      return {
        count: action.count,
      };
    }
    default: {
      return state;
    }
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());

// state will change but it will be ignored.
// unsubscribe();

store.dispatch({
  type: "DECREMENT",
});

store.dispatch(incrementCount());

store.dispatch({
  type: "DECREMENT",
  decrementBy: 10,
});

store.dispatch(incrementCount({ incrementBy: 3 }));

store.dispatch({
  type: "RESET",
});

store.dispatch({
  type: "SET",
  count: 101,
});
