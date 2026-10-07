export function createTask(task, onDeleteClick, toggle) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    
    span.textContent = task.text;
    span.classList.add('task-text');

    // لو المهمة مكتملة، بنضيف كلاس الشطب
    if (task.completed) {
        span.classList.add('completed');
    }

    // ربط الضغطة بالـ Toggle
    span.addEventListener('click', toggle);

    const deletebtn = document.createElement('button');
    deletebtn.textContent = '❌';
    deletebtn.classList.add('delete-btn');
    deletebtn.addEventListener('click', onDeleteClick);

    li.appendChild(span);
    li.appendChild(deletebtn);
    
    return li;
}