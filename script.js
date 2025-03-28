document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.onclick = function() {
            li.remove();
        };

        li.appendChild(deleteButton);
        document.getElementById('taskList').appendChild(li);
        taskInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a task!');
    }
});