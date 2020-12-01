import { createStore } from "redux";
// createStore is a function.

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET',
})

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        count: state.count + action.incrementBy,
      };
    }
    case "DECREMENT": {
      return {
        count: state.count - action.decrementBy,
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

store.dispatch(decrementCount());

store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy : 2}));

store.dispatch(incrementCount({ incrementBy: 3 }));

store.dispatch(resetCount());

store.dispatch(setCount({count: 20}));
