export {showTodoForm,addTodo,todorender,removeTodo,runTodoRender,toggleDone}
import { makeTodo ,today} from './classesandsave';
import {projects} from './project'
// Render Each Todo To Container
// cache dom 
var select = document.getElementById('select')
var todoContainer=document.getElementById('todo-container')
var doneContainer=document.getElementById('done-container')

// render the array 
function todorender(todoArray){
    todoContainer.innerHTML=""
    doneContainer.innerHTML=""
    todoArray.forEach(todo => {
        var div = document.createRange().createContextualFragment('<div class="todo"><div class="innertodo"> <div><input type="checkbox" id="todo" name="todo" value="todo"><label></label> </div><div id="dateandremove"><label></label><button id="removetodo">X</button><button id="edittodo">Edit</button></div></div> <div class="paragraph"><p></p></div></div>');
        var innerTodo=div.querySelector('.innertodo')
        innerTodo.id=todo.id
        var titleLabel=innerTodo.querySelector('label')
        titleLabel.innerHTML=todo.title
        titleLabel.setAttribute('data-content',`${titleLabel.innerHTML}`)
        let dateLabel= innerTodo.children[1].firstElementChild
        dateLabel.innerHTML=todo.date
        div.querySelector('p').innertext=todo.description
        var checkbox=div.querySelector('input[name="todo"]')
        if (todo.done==true){
            doneContainer.append(div)
            checkbox.checked=true
        }else {
            todoContainer.append(div)
            checkbox.checked=false
        }
    });
    checkCount()
}

// toggle a todos done and priority 
function toggleDone(projects){
    projects.forEach(project=>{
        if (project.title==select.value){
            project.todo.forEach(todo=>{
                todo.done= !todo.done
            })
        }
    })
}
// render todo if it's parent objects is the selected one 
function runTodoRender(projects){
    projects.forEach(project => {
        if (project.title==select.value) {
            todorender(project.todo)
        }
        
    });
}
// Add a todo
function addTodo(todoForm,projectArray){
    let title=document.getElementById('title').value
    let date = document.getElementById('date')
    var para=todoForm.querySelector('#todoformpara')
    date.setAttribute('min',`${today}`)
    let priority=document.getElementById('todoselect').value
    let description=document.getElementById('description').value
    if (title,date.value,description){
        let todo = makeTodo(title,date.value,priority,description)
        projectArray.forEach(element=>{
            if (element.title===select.value) element.todo.push(todo)
        })
        todoForm.style.display='none'
    }else {
        para.innerHTML="Please Enter Valid Information"
    }
}
// show and HideTodoForm
function showTodoForm(todoForm){
    todoForm.style.display='block'
}
function removeTodo(e){
    var innertodo=e.target.parentElement.parentElement
    todoContainer.removeChild(innertodo.parentElement)
    projects.forEach(project=>{
        if (project.title==select.value){
            project.todo=project.todo.filter(task=>{
                return task.id!==innertodo.id
            })
        }
    })
}
// check The Task count
function checkCount(){
    let count = document.getElementById('count').children[1]
    let todocontainer = document.getElementById('todo-container')
    console.log(todocontainer.childElementCount)
    if (todocontainer.childElementCount>1){
        count.innerHTML=`${todocontainer.childElementCount} Tasks remaining`
    } else {
        var checkCount=todocontainer.childElementCount==0?0:1
        count.innerHTML=`${checkCount} Task remaining`
    }
}