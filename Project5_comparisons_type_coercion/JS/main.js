document.write(typeof 53 + "<br>");
document.write(typeof 'Asong' + "<br>");

//type coercion
document.write('ten' + 10 + "<br>")

//Displaying NaN
document.write(0/0);

//Displaying True and False using Nan
document.write(isNaN('This is a string'));
document.write(isNaN(99));

//Displaying Negative and Positive infitiy
document.write(3E323);
document.write(-3E323);

//Displaying true or false using boolean logic
document.write(10 > 7);
document.write(4 < 2);

//console.log() function
console.log(19 + 7);

//Utilizing == to display 'true' and 'false'
document.write(90 == 90);
document.write(90 == 80);

//Utilizing === to display 'true' and 'false'
name1 = 'Asong';
name2 = 'Asong';
document.write(name1 === name2); //Return true by ensuring to match the data type and value

name3 = 'Dora';
name4 = 32;
document.write(name3 === name4);   //Return false by writing a different data type and different value.

E = 10;
F = 'ten';
document.write(E === F); //Return false by writing a different data type but the same value for both.

L = 'twelve';
I = 'eleven';
document.write(L === I);    //Return false by writing the same data type but a different value for both.


//Utilizing the AND and OR operators to display true and false
document.write( 10 > 2 && 5 > 4);
document.write( 10 < 2 && 5 > 4); //Utilizing the AND operator

document.write( 10 > 2 || 5 > 4);
document.write( 10 < 2 || 5 < 4);  //Utilizing the OR operator 

//NOT Operator
function not_func(){
    document.getElementById('Not').innerHTML = !(10 > 12);
}
function not_func(){
    document.getElementById('Not2').innerHTML = !(20 > 12);
}
