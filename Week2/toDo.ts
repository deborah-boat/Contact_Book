//import readline from "readline";
const readline = require("readline");


// Define Todo type
type Todo = {
  id: number;
  text: string;
  mood: string; // 😊 😡 😴 😎
};

let todos: Todo[] = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// CREATE
const addTodo = (): void => {
  rl.question("Enter task: ", (text: string) => {
    if (text.trim() === "") {
      console.log("Task cannot be empty!\n");
      return showMenu();
    }

    rl.question("Choose a mood (😊 😡 😴 😎): ", (mood: string) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: text.trim(),
        mood: mood.trim() || "😊",
      };

      todos.push(newTodo);
      console.log("✓ Mood-task added!\n");
      showMenu();
    });
  });
};

// READ
const listTodos = (): void => {
  console.clear();
  console.log("\n=== Mood Todo App ===");
  console.log("Commands: add, list, update, remove, exit\n");

  if (todos.length === 0) {
    console.log("No tasks yet!\n");
  } else {
    todos.forEach((todo) => {
      console.log(`${todo.id}. ${todo.mood}  ${todo.text}`);
    });
    console.log("");
  }

  process.stdout.write("> ");
  rl.question("", handleCommand);
};

// UPDATE
const updateTodo = (): void => {
  rl.question("Enter task ID to update: ", (input: string) => {
    const id = parseInt(input);
    const todo = todos.find((t) => t.id === id);

    if (!todo) {
      console.log("Task not found!\n");
      return showMenu();
    }

    rl.question("New task text: ", (newText: string) => {
      rl.question("New mood (😊 😡 😴 😎): ", (newMood: string) => {
        todo.text = newText.trim() || todo.text;
        todo.mood = newMood.trim() || todo.mood;

        console.log("✓ Task updated!\n");
        showMenu();
      });
    });
  });
};

// DELETE
const removeTodo = (): void => {
  rl.question("Enter task ID to remove: ", (input: string) => {
    const id = parseInt(input);
    const before = todos.length;

    todos = todos.filter((t) => t.id !== id);

    if (todos.length === before) {
      console.log("Task not found!\n");
    } else {
      console.log("✓ Task removed!\n");
    }

    showMenu();
  });
};

// COMMAND HANDLER
const handleCommand = (command: string): void => {
  switch (command.trim().toLowerCase()) {
    case "add":
      addTodo();
      break;
    case "list":
      listTodos();
      break;
    case "update":
      updateTodo();
      break;
    case "remove":
      removeTodo();
      break;
    case "exit":
      console.log("Goodbye!");
      rl.close();
      break;
    default:
      console.log("Unknown command\n");
      showMenu();
  }
};

// MENU
const showMenu = (): void => {
  //console.clear();
  console.log("\n=== Mood Todo App ===");
  console.log("Commands: add, list, update, remove, exit\n");
  process.stdout.write("> ");
  rl.question(">", handleCommand);
};

// START
showMenu();
