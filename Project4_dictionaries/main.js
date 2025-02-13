//Dictionaries
function my_Dict(){
    var Student = {
        name:"Asong",
        age:"Fat years",
        gender:"male",
        number:7,
    };
    document.getElementById("Dictionary").innerHTML = Student.name;
}

//Deleting key before value is displayed
function my_Dict2(){
    var Student = {
        name:"Asong",
        age:"Fat years",
        gender:"male",
        number:7,
    };
    delete Student.age
    document.getElementById("Dictionary2").innerHTML = Student.age;
}