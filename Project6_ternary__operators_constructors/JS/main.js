function Ride_function(){
    var Height, Can_ride;
    Height = document.getElementById('Height').value;
    Can_ride = (Height < 53) ? 'You are too short':'You are tall enough';
    document.getElementById('Ride').innerHTML = Can_ride + ' to ride';
}

//ternary operator challenge
function Voting_function() {
    var age, message;
    age = document.getElementById("age").value; // Get user input
    message = (age >= 18) ? "You can vote!" : "You are not old enough to vote.";
    document.getElementById("result").innerHTML = message; // Display result
}

//Constructor
function Vehicle (Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle('Dodge', 'Viper', 2022, 'Red');
var Emily = new Vehicle('Jeep', 'Trial Hawk', 2019, 'White and Black');
var Erik = new Vehicle('Ford', 'Pinto', 1971, 'Mustard');
function my_func() {
    document.getElementById('Key_Const').innerHTML = 'Erik drives a ' + Erik.Vehicle_Color + '-colored ' + Erik.Vehicle_Model + ' manufactured in ' + Erik.Vehicle_Year;
}

//Nested Function
function showMessage() {
    let name = "John"; // Variable inside the outer function

    // Nested function
    function formatMessage() {
        return "Hello, " + name + "! Welcome to JavaScript.";
    }

    // Call the nested function and display the result
    document.getElementById("output").innerHTML = formatMessage();
}