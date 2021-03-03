import { makeProject} from './classesandsave';
export {hideForm,addProject,ShowProjectForm,projects,projectRender,removeProject} 

let projects=[];
projects.push(makeProject('Tasks'))
// Show The Display 
function ShowProjectForm(form){
    form.style.display='flex'
}
// We Will use This Function on The Todo Form Aswell
function hideForm(form){
    form.style.display='none'
    form.querySelector('input').value=""
    form.querySelector('textarea').value
    if (form.querySelector('textarea').value){
        form.querySelector('textarea').value=""
    }
}
// Add A Project if The The Projects Doesn't Already Exist
function addProject(form,projectArray){
    var text=form.querySelector('input[name="projectinput"]')
    var p =form.querySelector('p')
    let titleExists=false
        for (let i =0;i<projectArray.length;i++){
            if (projectArray[i].title==text.value){
                titleExists=true
                break
            }
        }
        if (titleExists||text.value==0) p.innerText='Please Enter A Different Name!!'
        else {
            var select=document.getElementById('select')
            form.style.display='none'
            var project = makeProject(text.value)
            projectArray.push(project)
            projectRender(projectArray)
            select.value=text.value
            text.value=""
        }
}

// Render The porejcts To The List
function projectRender(projectArray){
    var select=document.getElementById('select')
    select.innerHTML=""
    projectArray.forEach(project => {
        let option = document.createElement('OPTION')
        option.value=project.title
        option.innerText=project.title
        option.id=project.id
        select.appendChild(option)
    });
}


function removeProject(){
    var select = document.getElementById('select')
    if (select.selectedIndex==0){
        projecterrors.style.display="block"
        projecterrors.innerText="Can't remove the Tasks Project"
        setTimeout(() => {
            projecterrors.innerText=""
            projecterrors.style.display="none"
        }, 1500);
    }

    else {
    var options = select.options;
    var id = options[options.selectedIndex].id;
    projects=projects.filter(project=>{
        return project.id!==id
    })
     projecterrors.style.display="block"
     projecterrors.innerText=`succesfully removed project ${select.value}`
        setTimeout(() => {
      projecterrors.innerText=""
      projecterrors.style.display="none"
    }, 1500);
    projectRender(projects)
    }
}