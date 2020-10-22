var $taskList = document.querySelector('.task-list');

function callBack(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var $task = event.target.closest('.task-list-item');
    console.log('closest .task-list-item: ', $task);
    $task.remove();
  }
}

$taskList.addEventListener('click', callBack);
