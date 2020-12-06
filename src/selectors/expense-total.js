export default (expenses) => {
  if (expenses.length > 0) {
    return expenses.reduce(
      (accumulator, expense) => accumulator + expense.amount,
      0
    );
  } else {
    return 0;
  }
};
