const {isArray}=require("./basic.js");

const callbacks = {
    have: (value) => (value !== undefined ? true : false),
    includesStrict: (value, range) => {
      if (!isArray(value)) {
          value = [value];
        }
      if (!isArray(range)) {
        range = [range];
      }
      if (isArray(range) && isArray(value)) {
        return value.every((el) => range.includes(el));
      }
    },
    includesNoStrict: (value, range) => {
      if (!isArray(value)) {
        value = [value];
      }
      if (!isArray(range)) {
        range = [range];
      }
      if (isArray(range) && isArray(value)) {
        return value.some((el) => range.includes(el));
      }
    },
    only:(value,list)=>{
        return list===value
    },
    strictLess:(curent,value)=>curent<value,
    unStrictLess:(curent,value)=>curent<=value,
    strictLarge:(curent,value)=>curent>value,
    unStrictLarge:(curent,value)=>curent>=value
  };
module.exports=callbacks  