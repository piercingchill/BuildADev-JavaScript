// Project 4: To-Do List

/* Steps
The todoList object has various methods to manage the list of todo items, such as addItem,
removeItem, findItemByTitle, findItemsByPriority, findItemsDueBefore, and completeItem.
Test your code by creating three TodoItem objects, add them to the todoList using the
addItem method, and then test various methods to retrieve, remove, and modify the todo
items in the list. 
*/


// Define the todo item object
function TodoItem(title, description, dueDate, priority, completed) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.completed = completed
}

// Define the todo list object
const todoList = {
    items: [],

    // Add a todo item to the list
    addItem: function (item) {
        if (!(item instanceof TodoItem)) {
            throw new Error("Invalid todo item object.");
        }
        //complete
        // Pretty straightforward after a Google search
        this.items.push(item) 
    },

    // Remove a todo item from the list
    removeItem: function (item) {
        //complete
        // First we need to find the position of the item 
        const position = this.items.indexOf(item)
        if (position = 1) {
            this.items.splice(position, 1) // Don't completely understand how the removing works here
        }
    },

    // Find a todo item in the list by title
    findItemByTitle: function (title) {
        return this.items.find(item => item.title === title);
    },

    // Find all todo items in the list that match a given priority
    findItemsByPriority: function (priority) {
                //complete
            return this.items.find(item => item.priority === priority);  // Copy paste from above
    },

    // Find all todo items in the list that are due on or before a given date
    findItemsDueBefore: function (date) {
        //complete
        // Using filter method to find all the items
        return this.items.filter(item => this.date <= dueDate) // Not sure about this one

    },

    // Mark a todo item as completed
    completeItem: function (item) {
        if (!(item instanceof TodoItem)) {
            throw new Error("Invalid todo item object.");
        }
        // Only marks as completed if it is true.
        item.completed = true
        //complete
    }
};

// Test the todo list
const item1 = new TodoItem("Buy groceries", "Milk, bread, eggs", new Date("2023-04-12"), "High", false);
// create two more items 
const item2 = new TodoItem("Finish assignment", "Project 4", new Date("2023-04-07"), "Critical", false)
const item3 = new TodoItem("Review Previous Lessons", "Lesson 2, 3, 4", new Date("2023-04-09"), "Medium", true)

todoList.addItem(item1);
// add 2 more items
todoList.addItem(item2)
todoList.addItem(item3)


console.log(todoList.items); // Output: [TodoItem, TodoItem, TodoItem]

console.log(todoList.items); // Output: [TodoItem, TodoItem]

console.log(todoList.findItemByTitle("Buy groceries")); // Output: TodoItem

console.log(todoList.findItemsByPriority("High")); // Output: [TodoItem]

console.log(todoList.findItemsDueBefore(new Date("2023-04-14"))); // Output: [TodoItem]

todoList.completeItem(item1);

console.log(item1.completed); // Output: true
