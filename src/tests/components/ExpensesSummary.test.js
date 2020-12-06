import React from "react";
import { shallow } from "enzyme";

import {ExpensesSummary} from "../../components/ExpensesSummary";

test("should correctly render ExpenseSummary with 1 expenses", () => {
  const wrapper = shallow(<ExpensesSummary length={1} total={235} />);
  expect(wrapper).toMatchSnapshot();
});

test("should correctly render ExpenseSummary with multiple expenses", () => {
  const wrapper = shallow(<ExpensesSummary length={23} total={235324234} />);
  expect(wrapper).toMatchSnapshot();
});
