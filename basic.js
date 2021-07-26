const isArray = (el) => Array.isArray(el);
const isObject = (el) => typeof el==="object"&&typeof el!=="function"&&!isArray(el);
const deepObjectProperty = (el, way) => {
  let result = el;
  const copyWay=way.replace(/\[|\]/g,match=>match=="["?".":"");// create object type for array's item: replace [ and ] on space or .
  try {
    copyWay.split(".").forEach((element) => {
      result = result[element];
    });
    return result;
  } catch {
    return undefined;
  }
};
module.exports = { isArray, isObject, deepObjectProperty };
