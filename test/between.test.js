const filterData = require("../module.js");

test("large option with number", () => {
  const data = [{ id: 1 }, { id: 2 }, { id: 3, img: "1" }];
  const prop = [{ name: "id", type: "between",value:{start:2,finish:4},strictMode:{start:false,finish:true} }];
  expect(filterData(data, prop)).toEqual([{ id: 2 },{ id: 3, img: "1" }]);
});
// test("large option with string", () => {
//     const data = [{ id: "a" }, { id: "b" },{ id: "h" }, { id: "d", img: "1" }];
//     const prop = [{ name: "id", type: "large",value:"c"}];
//     expect(filterData(data, prop)).toEqual([{ id: "h" }, { id: "d", img: "1" }]);
//   });
//   test("large option with different variable ", () => {
//     const data = [{ id: "12" }, { id: 1 }, { id: 4, img: "1" }];
//     const prop = [{ name: "id", type: "large",value:3 }];
//     expect(filterData(data, prop)).toEqual([{ id: 4, img: "1" }]);
//   });
//   test("large option with different variable Unstrict mode", () => {
//     const data = [{ id: 1 }, { id: 2 }, { id: 3}];
//     const prop = [{ name: "id", type: "large",value:2, strictMode:false}];
//     expect(filterData(data, prop)).toEqual([{ id: 2}, { id: 3}]);
//   });
//   test("large option with different variable strict mode", () => {
//     const data = [{ id: 1 }, { id: 2 }, { id: 3}];
//     const prop = [{ name: "id", type: "large",value:2, strictMode:true}];
//     expect(filterData(data, prop)).toEqual([{ id: 3}]);
//   });