//for loop
for(let i = 1; i <= 5; i++) {
    console.log(i);
}

for(let i = 10; i >= 1; i = i-3) {
    console.log(i);
}

//print all odd numbers 1 to 15
for(let i = 1; i <= 15; i = i + 2) {
    console.log("odd num are.", i);
}
//reverse
for(let i = 15; i >= 1; i = i - 2) {
    console.log("odd num reverse are.", i);
}

//print all even numbers 1 to 10
for(let i = 2; i <= 10; i = i + 2) {
    console.log("even num are.", i);
}
//reverse
for(let i = 10; i >= 2; i = i - 2) {
    console.log("even num reverse are.", i);
}

// for(let i = 1; ; i++) { //infinite loops
//     console.log(i);
// }

//multiplication of 5
for(let i = 5; i <= 50; i = i + 5) {
    console.log("mul. of 5", i);
}

let n = 12;
for(let i = n; i <= n * 10; i = i + n) {
    console.log("mul. of", n, "is", i);
}

//nested loops
for(let i = 1; i <= 3; i++) {
    for(let j = 1; j <= 3; j++) {
        console.log(j);
    }
}

//while loop
let i = 1;
while(i <= 5) {
    console.log(i);
    i++;
}

//practice
/* const favMovie = "avatar";

let guess = prompt("guess my favorite movie");

while ( (guess != favMovie) && (guess != "quit") ); {
    guess = prompt("wrong answer, please try again");
}

if(guess == favMovie) {
    console.log("congrats");
} else {
    console.log("you quit");
} */

//break keyword
let i1 = 1;
while(i1 <= 5) {
    if(i1 == 3) {
        break;
    }
    console.log(i1);
    i1++;
}

//loops with array
let fruits = ["mango","apple","banana","litichi","orange"];

for(let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

//nested loops with nested arrays
let heroes = [ ["ironman","spiderman","thor"], ["supernam","wonder woman","flash"]];

for(let i = 0; i < heroes.length; i++) {
    console.log(i, heroes[i], heroes[i].length);
    for(let j = 0; j < heroes[i].length; j++) {
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}

//for of loops
let fruits1 = ["mango","apple","banana","litichi","orange"];

for(fruit of fruits1) {
    console.log(fruit);
}

//nested for of loops
let heroes1 = [ ["ironman","spiderman","thor"], ["supernam","wonder woman","flash"]];

for(list of heroes) {
    for(hero of list) {
        console.log(hero);
    }
}