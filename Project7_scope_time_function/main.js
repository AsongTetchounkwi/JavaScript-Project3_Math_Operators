// Function that runs when the user clicks the <p> element
function displayGreeting() {
    let currentHour = new Date().getHours(); // Get the current hour (0-23)
    let message = ""; // Initialize an empty message

    // If-else statement to set the message based on time
    if (currentHour < 12) {
        message = "🌅 Good morning!";
    } else if (currentHour < 18) {
        message = "☀️ Good afternoon!";
    } else {
        message = "🌙 Good evening!";
    }

    // Update the <p> element with the new message
    document.getElementById("greetingText").innerHTML = message;
}

// Function to check if a number is positive, negative, or zero
function checkNumber() {
    let num = document.getElementById("numInput").value; // Get input value
    let message = ""; // Initialize message

    // If statement to check number type
    if (num > 0) {
        message = "The number is positive.";
    } else if (num < 0) {
        message = "The number is negative.";
    } else {
        message = "The number is zero.";
    }

    // Display the result in the <p> element
    document.getElementById("result").innerHTML = message;
}


// ✅ Function to check if a number is even or odd
function checkEvenOrOdd() {
    let num = document.getElementById("numberInput").value; // Get input value
    let message = ""; // Initialize message

    // ✅ If-else statement to check even or odd
    if (num % 2 === 0) {
        message = "✅ The number is even.";
    } else {
        message = "❌ The number is odd.";
    }

    // ✅ Display the result in the <p> element
    document.getElementById("para1").innerHTML = message;
}


// Assignment
// ✅ Global variable: This variable is available throughout the script.
let globalVar = 10; 

// ✅ Local variable: This variable is only accessible inside the function where it is defined.
function checkEvenOrOdd() {
    let localVar = 5; // Local variable

    // ✅ Logging the local and global variables
    console.log("Global Variable:", globalVar); // Should show 10
    console.log("Local Variable:", localVar);   // Should show 5

    // ✅ If statement to check if the number is even or odd
    let num = document.getElementById("numberInput2").value;

    if (num % 2 === 0) {
        document.getElementById("result2").innerHTML = "The number is even.";
    } else {
        document.getElementById("result2").innerHTML = "The number is odd.";
    }
}

// ✅ Intentionally introducing an error in a function for debugging
function intentionalError() {
    let num1 = 10;
    let num2 = "20";  // num2 is a string, which will cause an issue in addition
    let sum = num1 + num2; // This will result in string concatenation, not numeric addition

    // ✅ Debugging with console.log() - to see what's going wrong
    console.log("num1:", num1);  // Should log 10
    console.log("num2:", num2);  // Should log "20" (string)
    console.log("sum:", sum);    // Should log "1020", not the expected 30

    // Display the sum
    document.getElementById("result").innerHTML = "The sum is: " + sum;
}

// ✅ The Time_function() displays the current time and date
function Time_function() {
    // ✅ Create a new Date object to fetch the current time and date
    let currentTime = new Date();
    let timeString = currentTime.toLocaleString(); // Converts to a readable string format

    // ✅ Display the time in the <p id="time"> element
    document.getElementById("time").innerHTML = "Current Time: " + timeString;
}

