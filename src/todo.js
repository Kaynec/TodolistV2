export {showTodoForm,addTodo,todorender}
import { makeTodo ,savetoLocal,today} from './classesandsave';
import {project, projects,} from './project'
import {saveAndRender} from './index'
// Render Each Todo To Container

function todorender(todoArray){
    let template=document.getElementById('todo-template')
    var temp = document.importNode(template.content,true)
    var div = temp.querySelector('.todo')
    var taskcontainer=document.getElementById('taskcontainer')
    var todoContainer=document.getElementById('todo-container')
    todoContainer.innerHTML=''
    todoArray.forEach(todo => {
        // div.id=todo.id
        // var innerTodo=div.querySelector('.innertodo')
        // var titleLabel=innerTodo.querySelector('label')
        // titleLabel.innerHTML=todo.title
        // titleLabel.setAttribute('data-content',`${titleLabel.innerHTML}`)
        // let dateLabel= innerTodo.children[1].firstElementChild
        // dateLabel.innerHTML=todo.date
        // div.querySelector('p').innertext=todo.description
        // todoContainer.append(div)
        let div2 = document.createElement('div')
        div2.innerText=todo.title
        console.log(div2)
        todoContainer.append(div2)
    });
}

// Add a todo
function addTodo(todoForm,projectArray){
    let title=document.getElementById('title').value
    let date = document.getElementById('date')
    date.setAttribute('min',`${today}`)
    let priority=document.getElementById('todoselect').value
    let description=document.getElementById('description').value
    if (title,date.value,description){
        let todo = makeTodo(title,date.value,priority,description)
        projectArray.forEach(project => {
            if (project.title==select.value&&!(project.title==title)) {
                project.todo.push(todo)
                console.log(project.todo)
                todorender(project.todo)
                savetoLocal(projectArray)
            }
        });
        todoForm.style.display='none'
    }else {
        var para=todoForm.querySelector('#todoformpara')
        para.innerHTML="Please Enter Valid Information"
    }
}

// show and HideTodoForm
function showTodoForm(todoForm){
    todoForm.style.display='block'
}

function hideTodoForm(todoForm){
    todoForm.queryselector('input').value=""
    todoForm.queryselector('textarea').value=""
    todoForm.style.display='none'
}