export {savetoLocal,stored}

const savetoLocal=(object)=>{
    localStorage.setItem('array',JSON.stringify(object))
}
var stored = JSON.parse(localStorage.getItem("array"));

