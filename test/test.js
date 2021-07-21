const filterData=require("../module.js");

test("first test:return isn't data",()=>{
    const data=[{id:1},{id:2}];
    expect(filterData(data)).toEqual(data);
});