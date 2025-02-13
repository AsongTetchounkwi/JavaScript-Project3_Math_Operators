function adding_function(){
    var addition = 3 + 4;
    document.getElementById("Math").innerHTML = 'The sum of two number 3 and 4 is ' + addition;
}

//Function Subtraction 
function Subtraction_function(){
    var Subtract = 5- 2;
    document.getElementById('math_2').innerHTML = 'The answer of is: ' + Subtract;
}

//Function Multiplication
function Multiplication_func(){
    var T = 9 * 4;
    document.getElementById('Mult').innerHTML = 'Multiplication of 9 and 4 is: ' + T
}


//Function Division 
function Div_func(){
    var P = 10 / 2;
    document.getElementById('Div').innerHTML = 'The answer is: ' + P
}
//Unary Operator
function negation_func(){
    negation = 5;
    document.getElementById("Unary").innerHTML ='The new answer is: ' + -negation
}

//Increment and Decrement operators
var Y = 10;
Y++;
document.write(Y + "<br>");

var T = 5;
T--;
document.write(T + "<br>");

//Displaying random numbers
window.alert(Math.random() * 50)

/* What is Math Object Methods?
The Math object in JavaScript provides built-in methods for mathematical calculations.
Below are some commonly used Math methods with examples. */
//Math.abs() Returns absolute positive value of a number
document.write(Math.abs(-10) + "<br>")

//Math.ceil()  Round Up
document.write(Math.ceil(23.434) + "<br>")

//Math.floor()  Round Down