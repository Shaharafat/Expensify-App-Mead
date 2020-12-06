const moment = jest.requireActual("moment");

export default (timestamp = 0) => {
  return moment(timestamp);
};

// this file will use mock data for the value which changes over time.