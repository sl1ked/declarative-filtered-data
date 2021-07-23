const filterData = require("../module.js");

test("check commad only", () => {
  const data = [
    { id: 1 },
    { id: 2, img: "1" },
    { id: 3, img: [1, 2], src: "" },
    { id: 4, img: 1, src: "" },
  ];
  const prop = [{ name: "img", type: "custom", callback: (el) => el % 2 }];
  expect(filterData(data, prop)).toEqual([
    { id: 2, img: "1" },
    { id: 4, img: 1, src: "" },
  ]);
});
test("check commad only with this", () => {
  const data = [
    { id: 2, img: ["1"] },
    { id: 3, img: [1, 2], src: "" },
    { id: 4, img: [1], src: "" },
  ];
  const prop = [
    {
      name: "img",
      type: "custom",
      callback: function (el) {
        return el.includes(this.value);
      },
      value: 1,
    },
  ];
  expect(filterData(data, prop)).toEqual([
    { id: 3, img: [1, 2], src: "" },
    { id: 4, img: [1], src: "" },
  ]);
});

/**
 *  if you want to use arrow function with options value add arguments $value.
 *  You can put object in value for create more variable.
 **/
test("check commad only with arrow function", () => {
  const data = [
    { id: 2, img: ["1"] },
    { id: 3, img: [1, 2], src: "" },
    { id: 4, img: [1], src: "" },
  ];
  const prop = [
    {
      name: "img",
      type: "custom",
      callback: (el, $value) => el.includes($value),
      value: 1,
    },
  ];
  expect(filterData(data, prop)).toEqual([
    { id: 3, img: [1, 2], src: "" },
    { id: 4, img: [1], src: "" },
  ]);
});

test("checkdeep property work", () => {
  const data = [
    { id: 2, img: { value: ["1"] } },
    { id: 3, img: { value: [1, 2] }, src: "" },
    { id: 4, img: { value: [1] }, src: "" },
  ];
  const prop = [
    {
      name: "img.value",
      type: "custom",
      callback: (el, $value) => el.includes($value),
      value: 1,
    },
  ];
  expect(filterData(data, prop)).toEqual([
    { id: 3, img: { value: [1, 2] }, src: "" },
    { id: 4, img: { value: [1] }, src: "" },
  ]);
});

test("solo object prop", () => {
  const data = [
    { id: 2, img: { value: ["1"] } },
    { id: 3, img: { value: [1, 2] }, src: "" },
    { id: 4, img: { value: [1] }, src: "" },
  ];
  const prop = {
    name: "img.value",
    type: "custom",
    callback: (el, $value) => el.includes($value),
    value: 1,
  };
  expect(filterData(data, prop)).toEqual([
    { id: 3, img: { value: [1, 2] }, src: "" },
    { id: 4, img: { value: [1] }, src: "" },
  ]);
});
test("check function working", () => {
  const data = [
    { id: 2, img: { value: ["1"] } },
    { id: 3, img: { value: [1, 2] }, src: "" },
    { id: 4, img: { value: [1] }, src: "" },
  ];
  const prop = [
    {
      name: "img.value",
      type: "custom",
      callback: function (el) {
        return el.includes(this.value);
      },
      value: 1,
      option: 1,
    },
  ];
  expect(filterData(data, prop)).toEqual([
    { id: 3, img: { value: [1, 2] }, src: "" },
    { id: 4, img: { value: [1] }, src: "" },
  ]);
});
/**
 *  When we use function at callback we can use THIS.value
 * another options don't will be work **/
test("check function working", () => {
  const data = [
    { id: 2, img: { value: ["1"] } },
    { id: 3, img: { value: [1, 2] }, src: "" },
    { id: 4, img: { value: [1] }, src: "" },
  ];
  const prop = [
    {
      name: "img.value",
      type: "custom",
      callback: function (el) {
        return el.includes(this.option);
      },
      value: 1,
      option: 1,
    },
  ];
  expect(filterData(data, prop)).toEqual([]);
});
