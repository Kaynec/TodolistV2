import {savetoLocal} from './classesandsave'
import {hideForm,projectRender,addProject,ShowProjectForm,projects,removeProject} from './project'
import {showTodoForm,addTodo,removeTodo,runTodoRender,toggleDone} from './todo'
// This Module Handles The Event Listeners
// The Dom elements
const container = document.getElementById('container')
const showprojectform = document.getElementById('toggleprojectform')
const select = document.getElementById('select')
const projectForm=document.getElementById('projectform')
const cancelproject=document.getElementById('cancelProject')
const submitproject=document.getElementById('submitproject')
const showtodoForm=document.querySelector('.plus-button')
const todoForm=document.querySelector('#todoform')
const submittodo =document.getElementById('submittodo')
let projecterrors=document.getElementById('projecterrors')
projecterrors.style.display="none"
var stored = JSON.parse(localStorage.getItem("array"));
var lastProject=localStorage.getItem("lastProject")
// Inital render of projects
function contentLoaded(){
    if (stored) projects=stored
    projectRender(projects)
    if (lastProject){
        select.value=lastProject
        runTodoRender(projects)
    }else {
        runTodoRender(projects)
    }
}
// Select The Last Project When Dom Loads
window.addEventListener('DOMContentLoaded',contentLoaded)
// Display The Project Form
showprojectform.addEventListener('click',()=> ShowProjectForm(projectForm))
// Hide  The DIsplay Form
cancelproject.addEventListener('click',()=> hideForm(projectForm))
// add The Project
submitproject.addEventListener('click',(e)=>{
    addProject(projectForm,projects)
    saveAndRender()

})
// Show And Hide and Add The todo 
showtodoForm.addEventListener('click',(e)=>showTodoForm(todoForm))
canceltodo.addEventListener('click',(e)=>hideForm(todoForm))

// Adding a Todo
submittodo.addEventListener('click',(e)=>{
    addTodo(todoForm,projects)
    saveAndRender()
})

// Change The Todos For each Project
select.addEventListener('change',()=>{
    saveAndRender()
})

// removing a project or todo 
// showing todos description and editing it 

container.addEventListener('click',(e)=>{
    // removing a project 
    if (e.target.id=='removeproject') {
        removeProject()
        saveAndRender()
    // removing a todo
    } else if (e.target.id=='removetodo'){
        removeTodo(e)
        saveAndRender()
    // toggle done status of todo  
    } else if (e.target.id=='todo'){
        toggleDone()
    } 
})


function saveAndRender(){
    runTodoRender(projects)
    savetoLocal(projects)
}