const filterData = require("../module.js");

test("include values filter with not array's value", () => {
    const data = [
      { id: 1 },
      { id: 2, img: "1" },
      { id: 3, img: ["1", "3"], src: "" },
      { id: 4, img: ["1", "2"], src: "" },
    ];
    const prop = [
      { name: "img", type: "includes", value: "1", strictMode: true },
    ];
    expect(filterData(data, prop)).toEqual([
      { id: 2, img: "1" },
      { id: 3, img: ["1", "3"], src: "" },
      { id: 4, img: ["1", "2"], src: "" },
    ]);
  });
  test("include values filter with array's value strictMode", () => {
    const data = [
      { id: 1 },
      { id: 2, img: "1" },
      { id: 3, img: ["1", "3"], src: "" },
      { id: 4, img: ["1", "2"], src: "" },
    ];
    const prop = [
      { name: "img", type: "includes", value: ["1", "2"], strictMode: true },
    ];
    expect(filterData(data, prop)).toEqual([{ id: 4, img: ["1", "2"], src: "" }]);
  });
  test("check type of checking values", () => {
    const data = [
      { id: 1 },
      { id: 2, img: "1" },
      { id: 3, img: ["1", "3"], src: "" },
      { id: 4, img: ["1", "2"], src: "" },
    ];
    const prop = [
      { name: "img", type: "includes", value: ["1", 2], strictMode: true },
    ];
    expect(filterData(data, prop)).toEqual([]);
  });
  