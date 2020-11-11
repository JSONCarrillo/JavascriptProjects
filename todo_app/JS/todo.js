//Function gets task from input
function getTodos() {
    //creates an array of task that are inputed
    var todos = new Array;
    //pulls the task that was saved in the web browser memory
    var todosStr = localStorage.getItem('todo')
    //If the input is not null then JSON.parse will communicate with the web brwoser to make the task a JS object
    if (todosStr !== null) {
        todos = JSON.parse(todosStr)
    }

    return todos
}
//function adds the inouted task to the getTodos function array
function add() {
    //gets the value from the element 'task' and creates a variable
    var task = document.getElementById('task').value

    var todos = getTodos();
    //this adds a new task to the end of the array
    todos.push(task);
    //this converts the taskk inout to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = '';
    show();

    return false;
}
//this function keeps the tasks permanently displayed on the screen
function show() {
    //this sets the task to be retrieved as avariable
    var todos = getTodos();
    //this sets up each task as a unordered list
    var html = '<ul>';
    //this displays the task to the list in order that it is inputed
    for (i = 0; i < todos.length; i++) {
        //this also displays the task as a list and creates the button with the 'x'
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>'
    };
    html += '</ul>';
    //this displays the task as a list
    document.getElementById('todos').innerHTML = html;

    //this tlls the browser hot to display the todo array after item is removed
    var buttons = document.getElementsByClassName('remove');
    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }

}

//this displays the inputed task when the 'add item' button is clicked

document.getElementById('add').addEventListener('click', add);
//this will keeo the inputs displayed perminently
show();

//this creates the functionality of removing a todo item from an array

function remove() {
    var id = this.getAttribute('id');
    var todos = getTodos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    //this looks in the show() how to display a removed item from the screen
    show();

    return false;
}