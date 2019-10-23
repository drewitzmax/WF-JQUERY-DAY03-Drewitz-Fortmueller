tasks = 0;
order = 1;
createPage();

function createPage() {
    let header = document.createElement("header");
    let heading = document.createElement("h1");
    heading.textContent = "TO-DO-LIST";
    header.appendChild(heading);
    document.getElementById("body").appendChild(header);

    let createTask = document.createElement("div");
    createTask.id = "createTask";
    let inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "New Task here";
    inputField.id = "newTask";
<<<<<<< HEAD
    let addTaskButton = function() {
        addTask();
    }
=======

>>>>>>> ea25547ab9c73cc7c3cd23ef67386cc992a106e2
    inputField.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            commitButton.click();
        }
    });
    createTask.appendChild(inputField);

    let commitButton = document.createElement("button");
    commitButton.textContent = "Add Task";
    commitButton.addEventListener("click", function(){
        addTask();
        $("#newTask").val("");
    });
    createTask.appendChild(commitButton);
    document.getElementById("body").appendChild(createTask);

    let taskList = document.createElement("div");
    taskList.id = "taskList";
    let taskListHead = document.createElement("h2");
    taskListHead.textContent = "Tasks";
    taskList.appendChild(taskListHead);
    document.getElementById("body").appendChild(taskList);
}

function addTask() {

    let newTask = document.createElement("div");
    newTask.className = "task";

    let task = document.createElement("span");
    task.textContent = document.getElementById("newTask").value;
    document.getElementById("newTask").textContent = "";
    newTask.appendChild(task);

    let doneButton = document.createElement("button");
    doneButton.textContent = "\u2713";
    doneButton.className = "done";
<<<<<<< HEAD
    let taskDone = function() {
        newTask.className = "task done";
=======
    let taskDone = function(){
        $(this).parent().slideUp("500",function(){
            newTask.className="task done";
            newTask.style.order = order;
            order ++;
        })
        $(this).parent().slideDown("500");
>>>>>>> ea25547ab9c73cc7c3cd23ef67386cc992a106e2
        newTask.removeChild(doneButton);
    }
    doneButton.addEventListener("click", taskDone, false);
    newTask.appendChild(doneButton);

    let removeButton = document.createElement("button");
    removeButton.textContent = "\u2573";
    removeButton.className = "remove";
<<<<<<< HEAD
    let removeItem = function() {
        $(this).parent().fadeOut("1000", function() {
=======
    let removeItem = function(){
        $(this).parent().animate({marginLeft: '+=80px',opacity: 0.0},"1000",function(){
>>>>>>> ea25547ab9c73cc7c3cd23ef67386cc992a106e2
            newTask.parentNode.removeChild(newTask);
        })
    }
    removeButton.addEventListener("click", removeItem, false)
    newTask.appendChild(removeButton);

    newTask.style.display = "none";
    $("#taskList").append(newTask);
    $(".task").slideDown("1000");
<<<<<<< HEAD

=======
    
>>>>>>> ea25547ab9c73cc7c3cd23ef67386cc992a106e2
}