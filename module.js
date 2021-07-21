const callbacks={
    have:(value)=>value?true:false,
}


function filterData(data, options=[]) {
  let result = [...data];
  options.forEach((element) => {
    result=result.filter((el) => {
      if (element.type === "have") {
        return callbacks["have"](el[element.name]);  
      }
    });
  });
  return result;
}
module.exports = filterData;
