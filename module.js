const { isArray, isObject, deepObjectProperty } = require("./basic.js");
const callbacks = require("./callbacks.js");

function filterData(data, options = []) {
  let result = [...data];
  if (isObject(options)) {
    options = [options];
  }
  options.forEach((element) => {
    result = result.filter((el) => {
      const curentValue = deepObjectProperty(el, element.name);

      if (element.type === "have") {
        return callbacks["have"](curentValue);
      }

      if (element.type === "includes") {
        if (element.strictMode) {
          return callbacks["includesStrict"](element.value, curentValue);
        }
        return callbacks["includesNoStrict"](element.value, curentValue);
      }

      if (element.type === "only") {
        return callbacks["only"](element.value, curentValue);
      }
      if (element.type === "custom") {
        const $value = element.value;
        return element.callback.call({ value: $value }, curentValue, $value);
      }
      if (element.type === "less") {
        if(typeof curentValue===typeof element.value){
          return callbacks["less"]( curentValue,element.value);
        }
        return false
      }
    });
  });
  return result;
}
module.exports = filterData;
