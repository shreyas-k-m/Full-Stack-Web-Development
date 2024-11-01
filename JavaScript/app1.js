console.log("Hello World!");
console.log("Apna College!");
let a = 10;
let b = 5;
console.log("sim is :", a + b);

let pencil = 10;
let earser = 15;
// let output = "The total price is : " + (pencil + earser) + "Rupees.";
//template literals
let output = `The total price is : ${pencil + earser} Rupees.`
console.log(output);

//Arithmetic Operators
let a1 = 10;
let b1 = 5;
console.log(a1+b1);
console.log(a1-b1);
console.log(a1*b1);
console.log(a1/b1);
console.log(a1%b1);
console.log(a1**b1);

//Assignment
b1 = a1;
console.log(b1);

//Unary
console.log(a1++); //10
console.log(++a1); //12

//operators
let age = 18;
console.log(age >= 18);

console.log('a' > 'b');

// Conditional Statement 
// If Statement
console.log("Before My If Statement");
let age1 = 23;
if(age1 >= 18) {
    console.log("You Can Vote");
    console.log("You Can Drive");
}
console.log("After My If Statement");

//Practice
let color = "red";

//Traffic Light System
if(color == "red") {
    console.log("Stop");
}
if(color == "yellow") {
    console.log("Slow Down");
}
if(color == "green") {
    console.log("Go");
}

//else if 
let age2 = 14;
if(age2 >= 18) {
    console.log("You Can Vote");
}
else if (age2 < 18) {
    console.log("You Cannot Vote");
}

let marks = 75 

if(marks >= 80) {
    console.log("A+");
}
else if (marks >= 60) {
    console.log("A");
}
else if (marks >= 33) {
    console.log("B");
}
else if (marks < 33) {
    console.log("F");
}

//else 
let age3 = 17;
if(age3 >= 18) {
    console.log("You Can Vote");
} 
else {
    console.log("You Cannot Vote");
}

//practice
let size = "L";

if(size === "XL") {
    console.log("price is Rs. 250");
}
else if(size === "L") {
    console.log("price is Rs. 200");
}
else if(size === "M") {
    console.log("price is Rs. 100");
} else {
    console.log("price is Rs. 50")
}

//Nested if-else
let marks1 = 99;

if(marks1 >= 33) {
    console.log("Pass");
    if(marks1 >= 80) {
        console.log("Grade : O");
    } else {
        console.log("Grade : A");
    } 
} else {
    console.log("Better luck next time!");
}

//practice
let str = "ample";

if(str[0] === "a" && str.length > 3) {
    console.log("good string");
} else {
    console.log("not a good string");
}

let num = 12;
if((num%3 === 0) && (num+1 == 15) || (num-1 == 11)) {
    console.log("safe");
} else {
    console.log("unsafe");
}

//switch statement
let color1 = "green";

switch(color1) {
    case "red" :
        console.log("stop");
        break;
    case "yellow" :
        console.log("slow down");
        break;
    case "green" :
        console.log("GO");
        break;
    default :
        console.log("Broken Light")
}

//practice
let day = 5;

switch(day) {
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    case 7 :
        console.log("Sunday, fun day");
        break;
    default :
        console.log("Wrong day");
}

//alert
//alert("Something is wrong");
console.log("this is a simple error");
console.error("this is a error msg");
console.warn("this is a warn msg");

//prompt
let firsttname = prompt("enter your name");
console.log(firsttname);

//practice 1
let num1 = 20;

if(num % 10 == 0) {
    console.log("good");
} else {
    console.log("bad");
}

//practice 2
let name2 = prompt("please enter your name");
let age4 = prompt("please enter your age");

alert(`${name2} is ${age4} years old`);

//practice 3
let quarter = 1;

switch(quarter) {
    case 1 : console.log("January,  February, March");
    break;
    case 2 : console.log("April,  May, June");
    break;
    case 3 : console.log("July,  August, September");
    break;
    case 4 : console.log("October,  November, December");
    break;
    default : console.log("NOT A QUARTER!")
}

//practice 4
let str1 = "apples";

if((str1[0] == 'a' || start[0] == "A") && (str.length > 5)) {
    console.log("golden string");
} else {
    console.log("not a golden string");
}
