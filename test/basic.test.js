const filterData = require("../module.js");
const { isArray,isObject, getDeepObjectProperty } = require("../basic.js");

test("first test:return didn't change data", () => {
  const data = [{ id: 1 }, { id: 2 }];
  expect(filterData(data)).toEqual(data);
});
test("check deep property", () => {
  const obj = { a: { b: { c: 1 } } };
  const soloObj = { a: 1, c: 2 };
  expect(getDeepObjectProperty(obj, "a.b.c")).toEqual(1);
  expect(getDeepObjectProperty(soloObj, "a")).toEqual(1);
  expect(getDeepObjectProperty(obj, "a.b")).toEqual({ c: 1 });
});
test("check deep property with array's item", () => {
  const obj = { a: [{a:{a:2}}]};
  const obj1 = { a: [{a:[1,2]}]};
  expect(getDeepObjectProperty(obj, "a[0].a")).toEqual({ a: 2 });
  expect(getDeepObjectProperty(obj1, "a[0].a[1]")).toEqual(2);
});