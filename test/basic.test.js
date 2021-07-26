const filterData = require("../module.js");
const { isArray,isObject, deepObjectProperty } = require("../basic.js");

test("first test:return didn't change data", () => {
  const data = [{ id: 1 }, { id: 2 }];
  expect(filterData(data)).toEqual(data);
});
test("check deep property", () => {
  const obj = { a: { b: { c: 1 } } };
  const soloObj = { a: 1, c: 2 };
  expect(deepObjectProperty(obj, "a.b.c")).toEqual(1);
  expect(deepObjectProperty(soloObj, "a")).toEqual(1);
  expect(deepObjectProperty(obj, "a.b")).toEqual({ c: 1 });
});
test("check deep property with array's item", () => {
  const obj = { a: [{a:{a:2}}]};
  expect(deepObjectProperty(obj, "a[0].a")).toEqual({ a: 2 });
});