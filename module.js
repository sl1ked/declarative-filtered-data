const {isArray}=require("./basic.js");
const callbacks=require("./callbacks.js");

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
      if (element.type === "only") {
        return callbacks["only"](element.value,el[element.name]);
      }
      if (element.type === "custom") {
        const $value=element.value;
        return element.callback(el[element.name],$value)
      }
    });
  });
  return result;
}
module.exports = filterData;
