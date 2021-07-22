const {isArray}=require("./basic.js")
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
};

function filterData(data, options = []) {
  let result = [...data];
  options.forEach((element) => {
    result = result.filter((el) => {
      if (element.type === "have") {
        return callbacks["have"](el[element.name]);
      }
      if (element.type === "includes") {
        if (element.strictMode) {
          return callbacks["includesStrict"](element.value, el[element.name]);
        }
        return callbacks["includesNoStrict"](element.value, el[element.name]);
      }
    });
  });
  return result;
}
module.exports = filterData;
