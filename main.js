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

true = [complete]
false = [incomplete]

[true,        false,        true] . status array
['Walk Dog', 'Get food',  'Run nile'] . toDoList array
index 0           1          2         shared index

let status = [];
by default when item is added it defaults to false boolean to the status array [Incomplete] 


3. Complete To-Do Items
-display current items in toDo list with respective status
-pick which toDo item to mark as complete - swap status from false to true
-update display of status right after




*/
console.log("_______________________________________________");
console.log(" ");
console.log("Welcome to the To-Do List Manager Application!");
console.log("_______________________________________________");



selectOption();

//Build arrays to reference 1. List of Items 2.  Status of Items

let toDoList = [];
let statusArray = [];

// Begin interface with a while loop with knowledge that we need 3 option (1. Add 2. Update Status 3. Exit app) for user to select from.  If user select 3 (true) then exit the application; else continue running app.

while(option !== 3){
    if(option === 1){
        console.log("\n~ Creating a new to-do item ~");
        console.log("What is this to-do item called?");

//add to do item

        let addItem = prompt("> ");
        while(addItem === " " ||addItem.length < 1){
            console.log("Invalid: You must enter an item.");
            addItem = prompt("> ");
        }

        toDoList.push(addItem);
        statusArray.push(false);
        
        displayList();
     
//update status of to-do item
        selectOption(); //reprompt user
        } else if (option === 2){
            if(toDoList.length != 0){
            
            console.log("~ Complete a to-do item ~");
            console.log("Which to-do item would you like to complete?");
    
        displayList();

        let newStatus = Number(prompt("> ")); //reprompt

        while(isNaN(newStatus) || newStatus > statusArray.length || newStatus < 1) {
            console.log("Please input a number corresponding to list: ");
            newStatus = Number(prompt("> "));
            }
        statusArray[newStatus -1] = true;
        } else {
            console.log("List is empty, nothing to complete. Add item first!")
        }

        displayList();

        selectOption();
        } else {
        console.log('\nInvalid selection: Select from list!');
        selectOption()
        }
}

//-----Functions Below-----//

//Function to display inital UI with the available options to user
function selectOption(){
    console.log(" "); 
    console.log("~ Select an action ~");
    console.log("[1] Create a to-do item");
    console.log("[2] Complete a to-do item");   
    console.log("[3] Exit to-do list Application")
    option = Number(prompt("> "));  
};

//Function to display to-do item list and/or list to-do item status 
function displayList(){

    if(toDoList.length === 0){
        console.log("Your to-do list is empty.");
    } else {
        console.log(`\nYou have${toDoList.length} to-do's in your to-do item(s)\n`);
    }

    for(let i = 0; i < toDoList.length; i++){
        let status = "";
        if(statusArray[i]===false){
            status = "[Incomplete]";
        } else if (statusArray[i] === true){
            status = "[Complete]";
        }


        // console.log(`${i} ${toDoList[i]}\n`);
        console.log(`${i+1} ${status} ${toDoList[i]}\n`)
    }
}

