// Interface defining the shape of a task list
interface ITaskList {
    tasks: string[]; // Array to hold task strings
    addTask(task: string): number; // Adds a task, returns new length
    listAllTasks(): void; // Prints all tasks to console
    deleteTask(task: string): number; // Removes a task, returns new length
}

// Class that implements the ITaskList interface
class TaskList implements ITaskList {
    tasks: string[] = []; // Initialise as empty array

    // Adds a task, logs confirmation, returns new array length
    addTask(task: string): number {
        this.tasks.push(task); // Append task to end of array
        console.log(`Task "${task}" added.`);
        return this.tasks.length;
    }

    // Loops through and prints every task in the array
    listAllTasks(): void {
        this.tasks.forEach(task => console.log(task));
    }

    // Finds and removes a task by value, logs confirmation, returns new array length
    deleteTask(task: string): number {
        const index = this.tasks.indexOf(task); // Find position of task
        if (index !== -1) { // -1 means not found
            this.tasks.splice(index, 1); // Remove 1 element at found index
            console.log(`Task "${task}" deleted.`);
        }
        return this.tasks.length;
    }
}

// Test
const list = new TaskList();
list.addTask("Buy groceries");
list.addTask("Walk the dog");
list.addTask("Do laundry");
list.listAllTasks();
list.deleteTask("Walk the dog");
list.listAllTasks();
