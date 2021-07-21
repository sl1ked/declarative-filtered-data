const filterData=require("../module.js");

test("first test:return didn't change data",()=>{
    const data=[{id:1},{id:2}];
    expect(filterData(data)).toEqual(data);
});
test("filter is important options",()=>{
    const data=[{id:1},{id:2},{id:3,img:'1'}];
    const prop=[{name:"img",type:"have"},]
    expect(filterData(data,prop)).toEqual([{id:3,img:'1'}]);
});
test("double having filter",()=>{
    const data=[{id:1},{id:2},{id:3,img:'1',src:""},{id:4,img:'1',src:""}];
    const prop=[{name:"img",type:"have"},{name:"src",type:"have"},]
    expect(filterData(data,prop)).toEqual([{id:3,img:'1',src:""},{id:4,img:'1',src:""}]);
});