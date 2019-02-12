/*var age = prompt("What is your age?");
function checkdriverage () {
     if (Number(age) < 18) 
    {
        alert("Sorry, you are too young to drive this car");
    } else if(Number(age) > 18) 
    {
        alert("Powering up the car, Enjoy the ride");
    }else if(Number(age)===18)
    {
        alert("Congrats on your first year of driving, Be careful");
    }
}

var array = ["Bannana" , "Apple" , "Orange" , "Blueberries"];*/

var a = document.querySelector(".color1");
var b = document.querySelector(".color2");
var body = document.querySelector(".container");

a.addEventListener("input" , setgradient);

b.addEventListener("input" , setgradient);

function setgradient() {
body.style.background = "linear-gradient(to right," + a.value + "," + b.value +")";
}