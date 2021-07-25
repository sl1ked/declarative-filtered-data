const filterData = require("../module.js");

test("between option with number", () => {
  const data = [{ id: 1 }, { id: 2 }, { id: 3, img: "1" }];
  const prop = [
    { name: "id", type: "between", value: { start: 2, finish: 4 } },
  ];
  expect(filterData(data, prop)).toEqual([{ id: 3, img: "1" }]);
});
test("between option with string", () => {
  const data = [{ id: "1" }, { id: 2 }, { id: 3, img: "1" }];
  const prop = [
    { name: "id", type: "between", value: { start: 0, finish: 3 } },
  ];
  expect(filterData(data, prop)).toEqual([{ id: 2 }]);
});
test("between option with number", () => {
  const data = [{ id: 1 }, { id: 2 }, { id: 3, img: "1" }];
  const prop = [
    { name: "id", type: "between", value: { start: 2, finish: "4" } },
  ];
  expect(filterData(data, prop)).toEqual([]);
});
test("between option with number and mixed strict Mode", () => {
  const data = [{ id: 1 }, { id: 2 }, { id: 3, img: "1" }];
  const prop = [
    {
      name: "id",
      type: "between",
      value: { start: 2, finish: 4 },
      strictMode: { start: false, finish: true },
    },
  ];
  expect(filterData(data, prop)).toEqual([{ id: 2 }, { id: 3, img: "1" }]);
});
test("between option with unstrict Mode", () => {
    const data = [{ id: 1 }, { id: 2 }, { id: 4, img: "1" }];
    const prop = [{ name: "id", type: "between",value:{start:2,finish:4} ,strictMode:{start:false,finish:false}}];
    expect(filterData(data, prop)).toEqual([{ id: 2 },{ id: 4, img: "1" }]);
  });