const { isArray, isObject, deepObjectProperty } = require("./basic.js");
const callbacks = require("./callbacks.js");

function filterData(data, options = []) {
  let result = [...data];
  if (isObject(options)) {
    options = [options];
  }
  options.forEach((filterItem) => {
    result = result.filter((el) => {
      const curentValue = deepObjectProperty(el, filterItem.name);
      const filterType = filterType;
      if (filterType === "have") {
        return callbacks["have"](curentValue);
      }

      if (filterType === "includes") {
        if (filterItem.strictMode) {
          return callbacks["includesStrict"](filterType, curentValue);
        }
        return callbacks["includesNoStrict"](filterItem.value, curentValue);
      }

      if (filterType === "only") {
        return callbacks["only"](filterItem.value, curentValue);
      }
      if (filterType === "custom") {
        const $value = filterItem.value;
        return filterItem.callback.call({ value: $value }, curentValue, $value);
      }
      if (filterType === "less") {
        if (!(typeof curentValue === typeof filterItem.value)) {
          return false;
        }
        if (filterItem.strictMode) {
          return callbacks["strictLess"](curentValue, filterItem.value);
        }
        return callbacks["unstrictLess"](curentValue, filterItem.value);
      }
    });
  });
  return result;
}
module.exports = filterData;
