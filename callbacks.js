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
      if (Array.isArray(range) && Array.isArray(value)) {
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
      if (Array.isArray(range) && Array.isArray(value)) {
        return value.some((el) => range.includes(el));
      }
    },
    only:(value,list)=>{
        return list===value
    },
    custom:(value,callback)=>callback(value),
  };
module.exports=callbacks  