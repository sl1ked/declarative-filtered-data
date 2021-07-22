const filterData = require("../module.js");

test("include values filter with not array's value not  strictMode", () => {
    const data = [
      { id: 1 },
      { id: 2, img: "1" },
      { id: 3, img: ["1", "3"], src: "" },
      { id: 4, img: ["1", "2"], src: "" },
    ];
    const prop = [
      { name: "img", type: "includes", value: ["1", "2"], strictMode: false },
    ];
    expect(filterData(data, prop)).toEqual([
      { id: 2, img: "1" },
      { id: 3, img: ["1", "3"], src: "" },
      { id: 4, img: ["1", "2"], src: "" },
    ]);
  });
  