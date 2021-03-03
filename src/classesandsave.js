export {makeProject,makeTodo}
export {savetoLocal,today}
// save to local storage the last selected porject 
const savetoLocal=(object)=>{
    localStorage.setItem('array',JSON.stringify(object))
    localStorage.setItem('lastProject',(select.value))
}

function makeProject(title){
    return {title,todo:[],id:new Date().toString()}
}

function makeTodo(title,date,description,priority){
    return {title,date,description,priority,done:false,id:new Date().toString()}
}
// Today
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;