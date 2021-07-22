test("check type of checking values", () => {
    const data = [
      { id: 1 },
      { id: 2, img: "1" },
      { id: 3, img: ["1", "3"], src: "" },
      { id: 4, img: 1, src: "" },
    ];
    const prop = [
      { name: "img", type: "only", value: 1, strictMode: true },
    ];
    expect(filterData(data, prop)).toEqual([{ id: 4, img: 1, src: "" }]);
  });
  