let listOfTasks = [];

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#adding-form');
  const theList = document.querySelector('#theList');
  form.addEventListener('submit', addTask);
  theList.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('delete-button')) {
      const index = e.target.getAttribute('data-index');
      deleteTask(index);
    }
  });
  loadTasks(); // Load tasks from local storage when the page loads
});

// Function to handle adding a new task
function addTask(e) {
  e.preventDefault();
  const taskInfo = document.querySelector('#task-input');
  const task = taskInfo.value;

  if (task.length === 0 ) {
    return; // Don't do anything as task is nothing.
  } else {
    listOfTasks.push({ description: task, completed: false });
    const taskIndex = listOfTasks.length - 1;
    renderTask(task, taskIndex); // Ex. Buy grocery, 2 ->
    taskInfo.value = ""; // Clear the input field
    saveList();
  }
}

// Function to render a task in the DOM
function renderTask(task, index) {
  const theList = document.querySelector('#theList');

  const listItem = document.createElement('li');
  listItem.textContent = task;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `task-done-${index}`;
  checkbox.addEventListener('change', function() {
    listOfTasks[index].completed = checkbox.checked;
    saveList();
  });

  const checkBoxLabel = document.createElement('label');
  checkBoxLabel.htmlFor = `task-done-${index}`;
  checkBoxLabel.textContent = 'completed';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  deleteButton.setAttribute('data-index', index);

  const taskContainer = document.createElement('div');
  taskContainer.appendChild(listItem);
  taskContainer.appendChild(checkbox);
  taskContainer.appendChild(checkBoxLabel);
  taskContainer.appendChild(deleteButton);

  theList.appendChild(taskContainer);
}

// Function to save the current list of tasks to local storage
function saveList() {
  localStorage.setItem('tasks', JSON.stringify(listOfTasks));
}

// Function to load tasks from local storage and render them
function loadTasks() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    listOfTasks = JSON.parse(storedTasks);
    for (const [index, task] of listOfTasks.entries()) {
      renderTask(task.description, index);
    }
  }
}

// Function to delete a task from the list
function deleteTask(index) {
  const task = listOfTasks[index];
  if (task.completed || confirm('The task hasn\'t been completed. Delete anyways?')) {
    listOfTasks.splice(index, 1); //
    document.querySelector('#theList').innerHTML = ''; // Clear the current list
    listOfTasks.forEach((task, i) => {
      renderTask(task.description, i); // Re-render the list
    });
  } else {
    return;
  }
  saveList();
}
