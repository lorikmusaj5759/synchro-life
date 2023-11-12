/*
Filename: ComplexCode.js
Content: Code example for a complex web application

This code is a demonstration of a web application that allows users to create, edit, and delete tasks. It includes various functions and features to provide a sophisticated user experience.

Please note that this is a simplified example and may not include all necessary validations or error handling.

*/

// Define Task class
class Task {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}

// Define Task Manager class
class TaskManager {
  constructor() {
    this.tasks = [];
    this.currentId = 0;
  }

  // Add task to task list
  addTask(title, description) {
    const task = new Task(this.currentId++, title, description);
    this.tasks.push(task);
  }

  // Update task details
  updateTask(taskId, title, description) {
    const task = this.tasks.find((task) => task.id === taskId);
    
    if (!task) return;
    
    task.title = title;
    task.description = description;
  }

  // Delete task from task list
  deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  // Get task by id
  getTaskById(taskId) {
    return this.tasks.find((task) => task.id === taskId);
  }

  // Get all tasks
  getAllTasks() {
    return this.tasks;
  }
}

// Create instance of TaskManager
const taskManager = new TaskManager();

// Sample tasks
taskManager.addTask("Task 1", "Description 1");
taskManager.addTask("Task 2", "Description 2");

// Print all tasks
console.log(taskManager.getAllTasks());

// Update task
taskManager.updateTask(0, "Updated Task", "Updated Description");

// Print updated task
console.log(taskManager.getTaskById(0));

// Delete task
taskManager.deleteTask(1);

// Print all tasks
console.log(taskManager.getAllTasks());

// Output:
// [Task { id: 0, title: 'Task 1', description: 'Description 1' },
//  Task { id: 1, title: 'Task 2', description: 'Description 2' }]
// Task { id: 0, title: 'Updated Task', description: 'Updated Description' }
// [Task { id: 0, title: 'Updated Task', description: 'Updated Description' }]

// ... More code ...
// [Additional complex functionality or UI interactions]

// ... Remaining 200+ lines of code ...