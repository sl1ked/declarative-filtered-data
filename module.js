const {isArray,deepObjectProperty}=require("./basic.js");
const callbacks=require("./callbacks.js");

function filterData(data, options = []) {
  let result = [...data];
  options.forEach((element) => {
    result = result.filter((el) => {
      const elementValue=deepObjectProperty(el,element.name);
      if (element.type === "have") {
        return callbacks["have"](elementValue);
      }
      if (element.type === "includes") {
        if (element.strictMode) {
          return callbacks["includesStrict"](element.value, elementValue);
        }
        return callbacks["includesNoStrict"](element.value, elementValue);
      }
      if (element.type === "only") {
        return callbacks["only"](element.value,elementValue);
      }
      if (element.type === "custom") {
        const $value=element.value;
        return element.callback(elementValue,$value)
      }
    });
  });
  return result;
}
module.exports = filterData;
