import {makeProject,makeTodo,savetoLocal,stored,lastProject,today} from './classesandsave'
import {hideForm,projectRender,addProject,ShowProjectForm,projects} from './project'
import {showTodoForm,addTodo,todorender} from './todo'
export {saveAndRender}
// This Module Handles The Event Listeners
// The Dom elements
const container = document.getElementById('container')
const showprojectform = document.getElementById('toggleprojectform')
const select = document.getElementById('select')
const removeproject=document.getElementById('removeproject')
const todocontainer=document.getElementById('todo-container')
const todoTemplate=document.getElementById("todo-template")
const projectForm=document.getElementById('projectform')
const cancelproject=document.getElementById('cancelProject')
const submitproject=document.getElementById('submitproject')
const showtodoForm=document.querySelector('.plus-button')
const todoForm=document.querySelector('#todoform')
const submittodo =document.getElementById('submittodo')

// Inital render of projects
function contentLoaded(){
    // The Last Project
    var lastProject=localStorage.getItem("lastProject")
    if (stored) projects=stored
    console.log(projects)
    console.log(lastProject)
    projectRender(projects)
    if (lastProject){
    }if (lastProject!=""){
         projects.forEach(project=>todorender(project.todo))
        }
}
// Save And Render Each Projects
function saveAndRender(titleValue){
    projects.forEach(project=>{
        if (titleValue=="All") {
            projects.forEach(project=>{
                todorender(project.todo)
            })
        }else if (titleValue=='Today'){
            projects.forEach(project=>{
                if (project.todo.date==today) todorender(project.todo)
            })
        }else projects.forEach(project=>todorender(project.todo))
    })
    savetoLocal(projects)
}
// Select The Last Project When Dom Loads
window.addEventListener('DOMContentLoaded',contentLoaded)
// Display The Project Form
showprojectform.addEventListener('click',()=> ShowProjectForm(projectForm))
// Hide  The DIsplay Form
cancelproject.addEventListener('click',()=> hideForm(projectForm))
// Submit The Project
submitproject.addEventListener('click',(e)=>{
    e.preventDefault()
    addProject(projectForm,projects)
})
// Show And Hide and Add The todo 
showtodoForm.addEventListener('click',(e)=>showTodoForm(todoForm))
canceltodo.addEventListener('click',(e)=>hideForm(todoForm))
submittodo.addEventListener('click',(e)=>addTodo(todoForm,projects))

// Change The Todos For each Project
select.addEventListener('change',(e)=>saveAndRender(select.value))