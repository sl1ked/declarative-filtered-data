const isArray = (el) => Array.isArray(el);
const isObject = (el) => Object.isObject(el);
const deepObjectProperty=(el,way)=>{
    let result=el;
    try{
    way.split('.').forEach(element => {
            result=result[element];
    });
    return result;}catch{
        return undefined;
    }
}
module.exports={isArray,isObject,deepObjectProperty}