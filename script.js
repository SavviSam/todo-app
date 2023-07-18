const addTaskBtn = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");
const newTaskInput = document.querySelector("#new-task");

let tasks = [];

function addTask() {
  //get task value from input
  const task = newTaskInput.value;

  //create the new task; showing not completed by default
  const newTask = {
    text: task,
    completed: false,
  };

  //if statement for if the input value is blank contains only whitespaces
  if (task == null || !task.trim().length) {
    alert("Please enter a task");
    newTaskInput.value = "";
    return false;
  }
  //add task to array
  tasks.push(newTask);

  //clear text input
  newTaskInput.value = "";

  renderTasks();
}

//add task when button is clicked
addTaskBtn.addEventListener("click", addTask);

function renderTasks() {
  //clear list
  taskList.innerHTML = "";

  //loop through tasks
  tasks.forEach((task) => {
    //create list element for tasks
    const li = document.createElement("li");

    // add the task as text
    li.textContent = task.text;

    //add li to the list
    taskList.appendChild(li);
  });
}
