// write out EventListeners inside the DOMContentLoaded,
// write out functions outside of the DOMContentLoaded,

// User clicks on the input area to type out a task.
// User presses the Add button to add the task.
// Task is sent to an array
  // Array is looped and sent out to the bottom.
  // Task has three options Description, Checkmark for Done, and a Delete Button.
  // Task is saved to local storage.
// When User tries to delete without a checkmark, an alert appears, saying that the task hasn't been completed. delete anyways.
  // if chosen yes, it will be deleted. Otherwise it will be not be deleted.



let listOfTasks = [];
document.addEventListener('DOMContentLoaded', function() {
const form = document.querySelector('#adding-form')

form.addEventListener('submit', addFunction)


})


// Functions
function addFunction(e) {
  e.preventDefault()
  const taskInfo = document.querySelector('#task-input')
  const task = taskInfo.value
  listOfTasks.push(task)
  createList()
}

function createList() {
  const theList = document.querySelector('#theList')
  listOfTasks.forEach(function(task){
      const list = document.createElement('li')
      list.textContent = task;
      theList.appendChild(list)
  })
}
