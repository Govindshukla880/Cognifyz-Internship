/* Button Colour Change */

const btn = document.querySelector('.btn');

btn.addEventListener('click', () =>{
    btn.style.backgroundColor = '#0317fc';
    btn.style.boxShadow = '0 0 40px #0317fc';
    btn.style.transition = '0.5s ease';
});


/* Display a Greeting message based on the current time */

let greet = document.querySelector(".greet");

let timeNow = new Date().getHours();

console.log(timeNow);
let greeting = 
    timeNow >= 5 && timeNow < 12
        ? "Good Morning"
        : timeNow>=12 && timeNow < 18 
        ? "Good Afternoon"
        :"Good Evevning";
console.log(greeting);
greet.innerHTML = `<h1>${greeting}</h1>`;

/* Basic calculator that adds two numbers */

function func1(){
    var firstnum = document.getElementById("firstnum").value;
    var secondnum = document.getElementById("secondnum").value;

    var total = parseInt(firstnum) + parseInt(secondnum);
    document.getElementById("result").innerHTML="Result:"+total;
}