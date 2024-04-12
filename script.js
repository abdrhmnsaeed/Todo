let saveTask = [];


function updateTaskCount() {
  const totalTasks = saveTask.length;
  const checkedTasks = document.querySelectorAll('.checkbox:checked').length;
  document.getElementById('h1').textContent = `All Tasks: ${totalTasks}`;
  document.getElementById('h2').textContent = `Tasks Checked: ${checkedTasks}`;
}

function getNewTask() {
  let newTask = document.getElementById('task').value;
  let newAdd = document.getElementById('displayTask');
  saveTask.push(newTask);

  let newFieldContent = "";


  saveTask.forEach(function(task, index) {
    newFieldContent += `<div class="task" >
      <div>
        <h3>${task}</h3>
      </div>
      <div>
        <label class="checkbox-btn">
          <label for="checkbox"></label>
          <input id="checkbox" class="checkbox" type="checkbox" data-index="${index}">
          <span class="checkmark"></span>
        </label>
        <button class="btn del" id="del" data-index="${index}">
          <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" class="icon">
            <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
          </svg>
        </button>
      </div>
    </div>`;
  });


  newAdd.innerHTML = newFieldContent;
  updateTaskCount();


  document.getElementById('task').value = "";
  console.log(saveTask);


  let deleteBtns = document.querySelectorAll('.del');
  deleteBtns.forEach(btn => {
    btn.addEventListener("click", deleteTask);
  });

  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function() {
      updateTaskCount();
      toggleTask(event);
    });
  });
}

function deleteTask(event) {
  const taskToDelete = event.target.closest(".task");
  const indexToDelete = parseInt(event.target.dataset.index);
  taskToDelete.remove();
  saveTask.splice(indexToDelete, 1);
  updateTaskCount();
}

function toggleTask(event) {
  const taskElement = event.target.closest(".task");
  const taskText = taskElement.querySelector("h3");
  const isChecked = event.target.checked;

  if (isChecked) {
    taskText.style.textDecoration = "line-through";
    taskText.style.color = "green";
  } else {
    taskText.style.textDecoration = "none";
    taskText.style.color = "black";
  }
  updateTaskCount(); 
}



  

  
  
  

