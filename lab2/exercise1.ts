// Array to store task strings
const tasks: string[] = [];

// Adds a task to the array, logs confirmation, returns new array length
function addTask(task: string): number {
    tasks.push(task); // Append task to end of array
    console.log(`Task "${task}" added.`);
    return tasks.length;
}

// Loops through and prints every task in the array
function listAllTasks(): void {
    tasks.forEach(task => console.log(task));
}

// Finds and removes a task by value, logs confirmation, returns new array length
function deleteTask(task: string): number {
    const index = tasks.indexOf(task); // Find position of task in array
    if (index !== -1) { // -1 means not found
        tasks.splice(index, 1); // Remove 1 element at found index
        console.log(`Task "${task}" deleted.`);
    }
    return tasks.length;
}

// Test
addTask("Buy groceries");
addTask("Walk the dog");
addTask("Do laundry");
listAllTasks();
deleteTask("Walk the dog");
listAllTasks();
