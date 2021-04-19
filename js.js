function addItem() {
  let newItem = document.createElement('li');
  let statusDiv = document.createElement('div');
  let status = document.createElement('p');
  let taskDiv = document.createElement('div');
  let task = document.createElement('p');
  let setStatus = document.createElement('button');
  let deleteTask = document.createElement('button');

  status.innerHTML = "Открыто";
  status.style.backgroundColor = 'white';
  setStatus.innerHTML = 'Взять в работу';
  deleteTask.innerHTML = 'Удалить';

  let newItemValue = document.getElementById('add-item').value;

  if (newItemValue) {
    task.innerHTML = newItemValue;
  } else {
    alert ('Введите задание');
    return;
  }
  
  deleteTask.setAttribute('onclick','removeItem(this)');
  setStatus.setAttribute('onclick', 'inWork(this)');
  
  deleteTask.id = 'delete-button';
  setStatus.id = 'set-status-button';
  taskDiv.id = 'task-div';
  statusDiv.id = 'status-div';

  newItem.classList.add('flex-container-row', 'new-row');
  
  statusDiv.append(status);
  taskDiv.append(task);
  newItem.append(statusDiv);
  newItem.append(taskDiv);
  newItem.append(setStatus);
  newItem.append(deleteTask);

  let list = document.getElementById('todo-list');
  list.append(newItem);
  document.getElementById('add-item').value='';
}

function removeItem(button) {
  button.parentNode.remove();
  }

function inWork(button) {
  button.parentNode.firstChild.firstChild.innerHTML = 'В работе';
  button.parentNode.firstChild.firstChild.style.backgroundColor = '#E9E69B';
  button.innerHTML = 'Завершить';
  button.setAttribute('onclick', 'taskDone(this)');
}

function taskDone(button) {
  button.parentNode.firstChild.firstChild.innerHTML = 'Выполнено';
  button.parentNode.firstChild.firstChild.style.backgroundColor = '#AFD7A7';
  button.style.display = 'none';
  button.nextSibling.style.width = '31%';
}

function applyFilter() {
  let checkboxes = document.getElementsByClassName('filter');
  let checked = [];
  for (let check = 0; check < checkboxes.length; check++) {
    if(checkboxes[check].checked) {
      checked.push(checkboxes[check].value);
      }
      checkboxes[check].setAttribute('disabled', 'true');
  }
  let tasks = document.getElementsByClassName('new-row');
  for (let task=0; task<tasks.length; task++) {
    if(checked.indexOf(tasks[task].firstChild.firstChild.innerHTML) === -1) {
      tasks[task].style.display = 'none';
    }
  }
    document.getElementById('apply-filter').setAttribute('disabled', 'true');
    document.getElementById('reset-filter').removeAttribute('disabled');
}

function reset() {
  let tasks = document.getElementsByClassName('new-row');
  for (let task=0; task<tasks.length; task++) {
    tasks[task].style.display = 'flex';
  }
  document.getElementById('apply-filter').removeAttribute('disabled');
    document.getElementById('reset-filter').setAttribute('disabled', 'true');

  let checkboxes = document.getElementsByClassName('filter');
  for (let check = 0; check < checkboxes.length; check++) {
      checkboxes[check].checked = false;
      checkboxes[check].removeAttribute('disabled');
  }
}