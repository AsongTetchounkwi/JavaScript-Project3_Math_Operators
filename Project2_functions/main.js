function displayMessage() {
    // Assign two variables
    let name = "Alice";
    let message = "Hello, " + name + "! Welcome to the site.";

    // Use document.getElementById to update an HTML element
    document.getElementById("output").innerText = message;
}

let number = 5;

// Function to add 2 using the += operator
function addTwo() {
    number += 2; // Adds 2 to the current value of number
    document.getElementById("numberDisplay").innerText = "Number: " + number; // Updates display
}