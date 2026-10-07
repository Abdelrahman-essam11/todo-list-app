import { saveTasks, retriveTask, clearAllTasks } from "./src/storage.js";
import { createTask } from "./src/app.js";

const taskInput = document.getElementById('taskinput');
const addBtn = document.getElementById('addbtn');
const taskList = document.getElementById('tasklist');
const counter = document.querySelector('.taskcounter');
const clearAll = document.getElementById('clearall');

// أزرار الفلترة
const allBtn = document.getElementById('all');
const comBtn = document.getElementById('completed');
const notBtn = document.getElementById('not');

let taskArray = retriveTask();

// 💡 متغير لحفظ حالة الفلتر الحالية ('all' | 'completed' | 'pending')
let currentFilter = 'all';

function renderUI() {
    taskList.innerHTML = '';

    // 1. تصفية المهام بناءً على الفلتر المختار
    let filteredTasks = taskArray;
    if (currentFilter === 'completed') {
        filteredTasks = taskArray.filter(task => task.completed);
    } else if (currentFilter === 'pending') {
        filteredTasks = taskArray.filter(task => !task.completed);
    }

    // 2. رسم المهام المفلترة فقط
    filteredTasks.forEach((task, index) => {
        const taskItem = createTask(
            task,
            () => deleteTask(index),
            () => taskToggle(task.id)
        );
        taskList.appendChild(taskItem);
    });

    // 3. تحديث العداد بناءً على كل المهام
    taskcounter(taskArray);
}

function deleteTask(index) {
    taskArray.splice(index, 1);
    saveTasks(taskArray);
    renderUI();
}

function handleAddTask() {
    const newTaskText = taskInput.value.trim();
    if (!newTaskText) return alert('please write your task');

    const newTask = {
        id: Date.now(),
        text: newTaskText,
        completed: false
    };

    taskArray.push(newTask);
    saveTasks(taskArray);
    renderUI();
    taskInput.value = '';
}

function taskToggle(id) {
    taskArray = taskArray.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });

    saveTasks(taskArray);
    renderUI();
}

function taskcounter(taskArray) {
    if (!counter) return;
    const tasknum = taskArray.length;
    let finishedtask = taskArray.filter(task => task.completed).length;
    counter.textContent = `Finished ${finishedtask} of ${tasknum}`;
}

function handleClearAll() {
    if (taskArray.length === 0) return alert('no tasks to clear!!!');
    
    if (confirm('Are you sure you want to clear all tasks?')) {
        taskArray = [];
        clearAllTasks(); // أو clearAllStorage()
        renderUI();
    }
}

// 💡 ربط أحداث الفلترة برة الدالة
if (allBtn) {
    allBtn.addEventListener('click', () => {
        currentFilter = 'all';
        renderUI();
    });
}

if (comBtn) {
    comBtn.addEventListener('click', () => {
        currentFilter = 'completed';
        renderUI();
    });
}

if (notBtn) {
    notBtn.addEventListener('click', () => {
        currentFilter = 'pending';
        renderUI();
    });
}

// Event Listeners العامة
if (clearAll) {
    clearAll.addEventListener('click', handleClearAll);
}

addBtn.addEventListener('click', handleAddTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleAddTask();
});

// تشغيل الواجهة لأول مرة
renderUI();