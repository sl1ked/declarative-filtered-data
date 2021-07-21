const callbacks={
    have:(value)=>value!==undefined?true:false,
    includes:(value,range)=>{
        if(Array.isArray(range)){
            return range.includes(value);
        }
        return range==value
    }

}


function filterData(data, options=[]) {
  let result = [...data];
  options.forEach((element) => {
    result=result.filter((el) => {
      if (element.type === "have") {
        return callbacks["have"](el[element.name]);  
      };
      if (element.type === "includes") {
        return callbacks["includes"](element.value,el[element.name]);  
      };
    });
  });
  return result;
}
module.exports = filterData;
