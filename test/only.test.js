const filterData = require("../module.js");

test("check commad only", () => {
  const data = [
    { id: 1 },
    { id: 2, img: "1" },
    { id: 3, img: ["1", "3"], src: "" },
    { id: 4, img: 1, src: "" },
  ];
  const prop = [{ name: "img", type: "only", value: 1 }];
  expect(filterData(data, prop)).toEqual([{ id: 4, img: 1, src: "" }]);
});
test("deep check", () => {
  const data = [
    { id: 1 },
    { id: 2, img: { value: "1" } },
    { id: 2, img: { value: "2" } },
    { id: 3, img: ["1", "3"], src: "" },
    { id: 4, img: 1, src: "" },
  ];
  const prop = [{ name: "img.value", type: "only", value: "1" }];
  expect(filterData(data, prop)).toEqual([{ id: 2, img: { value: "1" } },]);
});
