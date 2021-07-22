const filterData = require("../module.js");

test("first test:return didn't change data", () => {
  const data = [{ id: 1 }, { id: 2 }];
  expect(filterData(data)).toEqual(data);
});