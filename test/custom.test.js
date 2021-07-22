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
test("check commad only", () => {
    const data = [
      { id: 1 },
      { id: 2, img: ["1"] },
      { id: 3, img: [1, 2], src: "" },
      { id: 4, img: [1], src: "" },
    ];
    const prop = [{ name: "img", type: "custom", callback: (el) => el.includes(this.value),value:1}];
    expect(filterData(data, prop)).toEqual([
      { id: 2, img: "1" },
      { id: 4, img: 1, src: "" },
    ]);
  });