document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    
    const li = document.createElement('li');
    li.textContent = taskText;

    
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    
    removeBtn.addEventListener('click', function() {
        li.remove(); 
    });

    li.appendChild(removeBtn); 
    document.getElementById('taskList').appendChild(li); 

    
    taskInput.value = '';
});
