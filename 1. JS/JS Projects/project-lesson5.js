// Project 5

// Define the ToDoItem class for individual to-do items
class ToDoItem {
  constructor(name, priority) {
    this.name = name;
    this.priority = priority;
    this.completed = false;
    this.subItems = [];
  }

  // Getter and setter for the item's name
  get getName() {
    return this.name;
  }
  set setName(newName) {
    this.name = newName;
  }

  // Getter and setter for the item's priority
  get getPriority() {
    //complete
    return this.priority;
  }
  set setPriority(newPriority) {
    //complete
    this.priority = newPriority;
  }

  // Mark the item as completed
  completeItem() {
    //complete
    this.completed = true;
  }

  // Add a sub-task to the item
  addSubItem(subItem) {
    this.subItems.push(subItem);
  }

  // Remove a sub-task from the item
  removeSubItem(subItem) {
    const index = this.subItems.indexOf(subItem);
    if (index > -1) {
      this.subItems.splice(index, 1);
    }
  }

  // Get the number of sub-tasks for the item
  getNumSubItems() {
    //complete
    return this.subItems.length;
  }

  // Get the number of completed sub-tasks for the item
  getNumCompletedSubItems() {
    let count = 0;
    this.subItems.forEach((subItem) => {
      if (subItem.completed) {
        count++;
      }
    });
    return count;
  }
}

// Define the SubToDoItem class for sub-tasks of a to-do item
class SubToDoItem extends ToDoItem {
  constructor(name, priority) {
    super(name, priority);
  }
}

// Define the ToDoList class for managing a list of to-do items
class ToDoList {
  constructor() {
    this.items = [];
  }

  // Add a new item to the list
  addItem(item) {
    //complete
    this.items.push(item);
  }

  // Remove an item from the list
  removeItem(item) {
    //complete
    // This one was harder to understand, had to use outside help. Basically ended up copy pasting.
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  // Get the number of items in the list
  getNumItems() {
    //complete
    return this.items.length;
  }

  // Get the number of completed items in the list
  getNumCompletedItems() {
    //complete
    // Basically copied from above
    let count = 0;
    this.items.forEach((item) => {
      if (item.completed) {
        count++;
      }
    });
    return count;
  }

  // Sort the items in the list by priority
  sortByPriority() {
    this.items.sort((a, b) => {
      const priorities = ["Low", "Medium", "High"];
      return priorities.indexOf(a.priority) - priorities.indexOf(b.priority);
    });
  }
}

// Define a function for saving a to-do list to local storage
function saveList(list) {
  //complete
  // Found this online as well
  localStorage.setItem("todoList", JSON.stringify(list));
}

// Define a function for loading a to-do list from local storage
function loadList() {
  //complete
  // Found this one online as well.
  const savedList = localStorage.getItem("todoList");
  return todoList;
}

//Testing

// Create a new to-do list
const myTodoList = new ToDoList();
console.log("Created a new ToDoList object:", myTodoList);

// Create some to-do items and add them to the list
const item1 = new ToDoItem("Buy groceries", "Medium");
const item2 = new ToDoItem("Clean the house", "High");
const item3 = new ToDoItem("Go for a run", "Low");
myTodoList.addItem(item1);
myTodoList.addItem(item2);
myTodoList.addItem(item3);
console.log("Added some ToDoItem objects to the list:", myTodoList);

// Add some sub-tasks to an item
const subItem1 = new SubToDoItem("Buy apples", "Low");
const subItem2 = new SubToDoItem("Buy bread", "Low");
const subItem3 = new SubToDoItem("Buy milk", "Low");
item1.addSubItem(subItem1);
item1.addSubItem(subItem2);
item1.addSubItem(subItem3);
console.log("Added some SubToDoItem objects to item1:", item1);

// Complete a sub-task
subItem2.completeItem();
console.log("Completed a sub-task:", subItem2);

// Sort the items by priority
myTodoList.sortByPriority();
console.log("Sorted the items by priority:", myTodoList);

// Get the number of items and completed items in the list
const numItems = myTodoList.getNumItems();
const numCompletedItems = myTodoList.getNumCompletedItems();
console.log("Number of items in the list:", numItems);
console.log("Number of completed items in the list:", numCompletedItems);

// Remove an item from the list
myTodoList.removeItem(item3);
console.log("Removed an item from the list:", myTodoList);

// Save the list to local storage
saveList(myTodoList);
console.log("Saved the list to local storage:", myTodoList);

// Load the list from local storage
const loadedList = loadList();
console.log("Loaded the list from local storage:", loadedList);
