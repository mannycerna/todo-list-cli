const prompt = require('prompt-sync')({sigint: true});

/*
1. Display content to the user
2. Prompt the user for an action
3. Handle that action accordingly
--------------------------------------

1. Design the User Interface (UI)
    -console.log()
        --welcome message
        --different option (add task, complete task, exit program)
        --error messages for invalid user input
        --spacing/seperators to make it look nice
    -prompts
        --numbers to select an option
        -- 1.  add a task - prompt user for item to create
        -- 2.  mark task as complete - prompt user
        -- 3.  exit

    -while loop
        --program has no known edning, so we want to be able to prompt user infef/until they exit.

    -display the to-do list to user
        --completion status (complete or incomplete)
        --the name of the item
        --the number associated with item
        --loop to display each item in the To-do list


2. Add To-Do Items
  -prompt for the to-do item
  -save the item by storing it in an array - .push()
  -an array to keep track of the item.

2.5 - How do we set items to be incomplete
//Any item in the list is [incomplete] until we mark it [complete]
//Whenever we add an item to the toDo List it is [incomplete] by default

array of booleans
[true,        false,        true] . status array
['Walk Dog', 'Get food',  'Run nile'] . toDoList array
index 0           1          2         shared index

3. Complete To-Do Items




*/
console.log("Welcome to the To-Do List Manager Application!\n");

selectOption();
// console.log("~ Select an action ~");
// console.log("[1] Create a to-do item");
// console.log("[2] Complete a to-do item");
// console.log("[3] Exit to-do list")

// let option = Number(prompt("> "));
let toDoList = [];
let stat_Array = [];

while(option !== 3){
    if(option === 1){
        console.log("\n~ Creating a new to-do item ~");
        console.log("What is this to-do item called?");

        //add to do item
        let addItem = prompt("> ");
        while(addItem === " "){
            console.log("Invalid: Input cannot be empty");
            addItem = prompt("> ");
        }

        toDoList.push(addItem);
        stat_Array.push("[Incomplete]");

        displayList();
     
        //reprompt user
        selectOption();
        } else if (option === 2){
        console.log("~ Complete a to-do item ~");
        console.log("Which to-do item would you like to complete?");
        
            
        //complete a to do item

        selectOption();
        } else {
        console.log('\nInvalid operation');
        }
}

function selectOption(){
    console.log("~ Select an action ~");
    console.log("[1] Create a to-do item");
    console.log("[2] Complete a to-do item");   
    console.log("[3] Exit to-do list Application")
    option = Number(prompt("> "));  
};

function displayList(){

    if(toDoList.length === 0){
        console.log("Your to-do list is empty.");
    } else {
        console.log(`\nYou have${toDoList.length} to-do's in your to-do item(s)\n`);
    }

    for(let i = 0; i < toDoList.length; i++){
        // console.log(`${i} ${toDoList[i]}\n`);
        console.log(`${i+1} ${stat_Array[i]} ${toDoList[i]}\n`)
    }
}

