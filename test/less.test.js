const filterData = require("../module.js");

test("less option with number", () => {
  const data = [{ id: 1 }, { id: 2 }, { id: 3, img: "1" }];
  const prop = [{ name: "id", type: "less",value:2 }];
  expect(filterData(data, prop)).toEqual([{ id: 1 }]);
});
test("less option with string", () => {
    const data = [{ id: "a" }, { id: "b" }, { id: "d", img: "1" }];
    const prop = [{ name: "id", type: "less",value:"c" }];
    expect(filterData(data, prop)).toEqual([{ id: "a" }, { id: "b" }]);
  });
  test("less option with different variable", () => {
    const data = [{ id: "1" }, { id: 1 }, { id: 2, img: "1" }];
    const prop = [{ name: "id", type: "less",value:3 }];
    expect(filterData(data, prop)).toEqual([{ id: 1 }, { id: 2,img:"1" }]);
  });
  test("less option with different variable", () => {
    const data = [{ id: 1 }, { id: 2 }, { id: 3}];
    const prop = [{ name: "id", type: "less",value:2, strict:false}];
    expect(filterData(data, prop)).toEqual([{ id: 1 }, { id: 2}]);
  });
  test("less option with different variable", () => {
    const data = [{ id: 1 }, { id: 2 }, { id: 3}];
    const prop = [{ name: "id", type: "less",value:2, strict:true}];
    expect(filterData(data, prop)).toEqual([{ id: 1 }]);
  });