const { isArray, isObject, getDeepObjectProperty } = require("./basic.js");
const callbacks = require("./callbacks.js");

function filterData(data, options = []) {
  let result = [...data];
  if (isObject(options)) {
    options = [options];
  }
  options.forEach((filterItem) => {
    result = result.filter((el) => {
      const curentValue = getDeepObjectProperty(el, filterItem.name);
      const filterType = filterItem.type;
      if (filterType === "have") {
        return callbacks["have"](curentValue);
      }

      if (filterType === "includes") {
        if (filterItem.strictMode === false) {
          return callbacks["includesNoStrict"](filterItem.value, curentValue);
        }
        return callbacks["includesStrict"](filterItem.value, curentValue);
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
        if (filterItem.strictMode === false) {
          return callbacks["unStrictLess"](curentValue, filterItem.value);
        }
        return callbacks["strictLess"](curentValue, filterItem.value);
      }
      if (filterType === "large") {
        if (!(typeof curentValue === typeof filterItem.value)) {
          return false;
        }
        if (filterItem.strictMode === false) {
          return callbacks["unStrictLarge"](curentValue, filterItem.value);
        }
        return callbacks["strictLarge"](curentValue, filterItem.value);
      }
      if (filterType === "between") {
        if (
          !(
            typeof curentValue === typeof filterItem.value.start &&
            typeof filterItem.value.start === typeof filterItem.value.finish
          )
        ) {
          return false;
        }
        const mode = {
          start: filterItem?.strictMode?.start??true,
          finish: filterItem?.strictMode?.finish??true,
        };
        const startType =
          mode.start === false ? "unStrictLarge" : "strictLarge";
        const finishType =
          mode.finish === false ? "unStrictLess" : "strictLess";
        return (
          callbacks[startType](curentValue, filterItem.value.start) &&
          callbacks[finishType](curentValue, filterItem.value.finish)
        );
      }
    });
  });
  return result;
}
module.exports = filterData;
