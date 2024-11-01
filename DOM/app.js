let btns = document.querySelectorAll("button");
for(btn of btns) {
    //btn.onclick = sayHello; //onclick
    //btn.onmouseenter = function () { //onmouseenter
    //     console.dir("you entered a button");
    // }

    btn.addEventListener("click", sayHello); 
    btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function() {
        console.log('button was double clicked');
        console.log(this); //this
        console.dir(this.innerText);
    });
}
console.dir(btn);

// btn.onclick = function () { //inline function
//     console.log('button was clicked');
// };

function sayHello() {
    console.log('hello');
}

function sayName() {
    console.log('Apna College');
}
 
let inp = document.querySelector("input"); //keyboard events

inp.addEventListener("keydown", function(event) {
    console.log(event)
    console.log("key was pressed");
});

// inp.addEventListener("keyup", function() {
//     console.log("key was pressed");
// });

let form = document.querySelector("form");

form.addEventListener("submit", function(event) { //form event
    event.preventDefault();
    console.log(event)
    console.log("form submitted");

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    console.dir(user.value);
    console.log(pass.value);
});

let div = document.querySelector("div"); //event listiner
let ul = document.querySelector("ul");
let li = document.querySelector("li");

div.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("div was clicked");
});

ul.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("ul was clicked");
});

li.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("li was clicked");
});