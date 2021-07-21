const filterData=require("../module.js");

test("first test:return isn't data",()=>{
    const data=1;
    expect(filterData(data).toBe(data));
});