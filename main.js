let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs div");
let underLine = document.getElementById("under-line");
let taskList = [];
let mode = 'all';
let filterList = [];
addButton.addEventListener("click",addTask);
console.log(tabs);

// let changeColor = document.getElementById("change-color");
// changeColor.addEventListener("click",changeColor);



for(let i=1; i<tabs.length;i++) {
    tabs[i].addEventListener("click",function(event){filter(event)});
}

function addTask() {
       
    let task = {
        id:randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete:false
    }
    taskList.push(task);
    console.log(taskList);
    render();
}

function render() {
    
    let list=[];
    if(mode === "all") {
        list = taskList;
    }else if(mode === "ongoing"|| mode ==="done") {
        list = filterList;
    }






    let resultHTML = "";

    for(let i = 0; i < list.length; i++) {
        if(list[i].isComplete == true) {
            resultHTML+=`<div class="task">
        
            <div class="task-done">${list[i].taskContent}</div>  
              <div>
                  <button onclick="toggleComplete('${list[i].id}')">check</button>
                  <button onclick="deleteTask('${list[i].id}')">delete</button>
              </div>
          </div>`;
        }else if(list[i].isComplete == false) {
            resultHTML += `<div class="task">
        
            <div>${list[i].taskContent}</div>  
              <div>
                  <button onclick="toggleComplete('${list[i].id}')">check</button>
                  <button onclick="deleteTask('${list[i].id}')">delete</button>
              </div>
          </div>`;
        }

/* 
        resultHTML += `<div class="task">
        
                  <div>${taskList[i].taskContent}</div>  
                    <div>
                        <button onclick="toggleComplete('${taskList[i].id}')">check</button>
                        <button>delete</button>
                    </div>
                </div>`; */
    }
    
    document.getElementById("task-board").innerHTML = resultHTML;

}

function toggleComplete(id) {
    console.log("id:",id);
    for(let i = 0; i<taskList.length;i++) {
        if(taskList[i].id == id) {
            taskList[i].isComplete= !taskList[i].isComplete;
            break;
        }
    }
    render();
    console.log(taskList);
}

function deleteTask(id) {
    for(let i=0;i<taskList.length;i++) {
        if(taskList[i].id == id) {
            taskList.splice(i,1)
            break;
        }
    }
    
    render();
}

function filter(event) {
    mode = event.target.id
    filterList = [];



    if(mode === "all") {
    
    }else if(mode === "ongoing"){

        for(let i=0;i<taskList.length;i++) {
            if(taskList[i].isComplete === false) {
                filterList.push(taskList[i]);
            }
        }
        render();
        console.log("진행중",filterList);
    }else if(mode === "done") {
        for(let i=0;i<taskList.length;i++) {
            if(taskList[i].isComplete === true) {
                filterList.push(taskList[i]);
            }
        }
        render();
    }

    
        
        // underLine.style.width = e.target.offsetWidth + "px";
        // underLine.style.left = e.target.offsetLeft + "px";
        // underLine.style.top =
        //   e.target.offsetTop + (e.target.offsetHeight - 4) + "px";
      } 
    


function randomIDGenerate() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

