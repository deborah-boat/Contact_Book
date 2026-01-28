//Delayed Greeting Make a function called sayHelloLater that waits 2 seconds, then calls a callback with 'Hi, I am late!'
const sayHelloLater = () => {
    console.log("Waiting for 2 seconds...");
    setTimeout(() => {
        console.log("Hi, I am late!")
    }, 2000)
}
sayHelloLater();



//Create a function that takes two numbers and a callback. The function should add the numbers and send the result to the callback. 
const addNumbers = () => {
    const num1 = 6;
    const num2 = 12;
    const sum = num1 + num2
    console.log(`The sum is: ${sum}`);
    }
addNumbers();



//Write a function that takes a string and a callback. The callback should return the string in uppercase. 
const toUpperCase = () => {
    const str = "hi there!";
    const toUpperCaseStr = str.toUpperCase();
    console.log(`Uppercase String: ${toUpperCaseStr}`);
}
toUpperCase();



//Simulate ordering pizza. The function should wait 3 seconds and then call the callback with 'Your pizza is ready!'.
const orderPizza = () => {
    console.log("Ordering Pizza...");
    setTimeout(() => {
        console.log("Your Pizza is ready!")
    }, 3000)
}
orderPizza();



//Make a function that takes a callback and calls it three times with different messages. 
const callThreeTimes = () => {
    const messages = ["First call", "Second call", "Third call"];
    for(const message of messages){
        console.log(message);
    }
}
callThreeTimes();




//Create a function that takes a URL string and a callback. Wait 2 seconds, then call the callback with 'Downloaded data from <URL>'. 
const downnloadData = (url: string) => {
    console.log(`Starting download from ${url}...`);
    setTimeout(() => {
        console.log(`Downloaded data from ${url}`);
    }, 2000)
}
downnloadData("https://example.com");



//Make a function that takes two callbacks: one for success and one for error. Use Math.random() to decide which to call. 
const performOperation = () => {
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
        console.log("Operation was successful!");
    } else {
        console.log("Operation failed with an error.");
    }
}
performOperation();



//Write one function that can do addition, subtraction, multiplication, and division. It should take two numbers, an operation string, and a callback. 
const calculator = (num1: number, num2: number, operation: string, callback: (result: number) => 
    void) => {
    
    if (operation === "add") {
        callback(num1 + num2);
    }
    if (operation === "subtract") {
        callback(num1 - num2);
    }
    if (operation === "multiply") {
        callback(num1 * num2);
    }
    if (operation === "divide") {
        callback(num1 / num2);
    }
    
}

calculator(10, 5, "add", (result) => {
    console.log(`Addition Result: ${result}`);
});

calculator(10, 5, "subtract", (result) => {
    console.log(`Subtraction Result: ${result}`);
});



//Make three functions that each wait 1 second and then call the next callback, printing 'Step 1 done', 'Step 2 done', 'Step 3 done' in order. 

const stepOne = () => {
setTimeout(() => { console.log("Step 1 done"); stepTwo();}, 1000);}
const stepTwo = () => {  setTimeout(() => {  console.log("Step 2 done");  stepThree(); }, 1000);}
const stepThree = () => {setTimeout(() => { console.log("Step 3 done"); }, 1000);}
stepOne();
    