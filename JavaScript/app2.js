let msg = "   Hello   ";
console.log(msg.trim()); //trim

// let password = prompt("set yout password")
// let newPass = password.trim(); //trim
// console.log(newPass);

let str = "Random string";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let msg1 = "ILoveCoding";
console.log(msg1.indexOf("Love")); //indexOf

let msg2 = "   HEllO   ";
// let newmsg2 = msg2.trim();
// console.log(newmsg2);
// newmsg2 = newmsg2.toUpperCase();
// console.log(newmsg2);
let newmsg2 = msg2.trim().toUpperCase(); //method chaining
console.log(newmsg2);

let msg3 = "hello";
console.log(msg3.slice(0,4)); //slice

let msg4 = "ILoveCoding";
console.log(msg4);
console.log(msg4.replace("Love", "Do")); //replace
console.log(msg4.repeat(3)); //repeat

//Arrays
let students = ["aman","shradha","chotu"];
let nums = [2,4,6,8];
let info = ["aman", 20, 6.1]; //mixed array
let emp = [];
console.log(students, nums, info, emp);

let fruits = ["mango","apple","pinapple"];
fruits[0] = ["banana"]; //arrays are mutable
console.log(fruits[0]);
fruits[9] = ["payapa"];
console.log(fruits[9]);

//array methods
let cars = ["audi","bmw","xuv","maruti"];
cars.push("toyata","ferrari"); //push
console.log(cars);
cars.pop(); //pop
console.log(cars);
cars.unshift("ferrari"); //unshift
console.log(cars);
cars.shift(); //shift
console.log(cars);

//practice
let months = ["january","july","march","august"];
months.shift();
months.shift();
months.unshift("june");
console.log(months);

console.log(cars.indexOf("xuv")); //index of 
console.log(cars.includes("ferrari"));

let primary = ["red","yellow","blue"];
let secondary = ["orange","green","violet"];
allcolors = primary.concat(secondary); //concat
console.log(allcolors); 

console.log(allcolors.reverse()); //reverse

console.log(allcolors.slice(2)); //slice
console.log(allcolors.slice(2,3));
console.log(allcolors.slice(-2));

console.log(cars);
console.log(cars.splice(3)); //splice
console.log(cars.splice(0,1));

console.log(months.sort()); //sort

//practice
let months1 = ["january","july","march","august"];
months1.splice(0,2, "july","june");
console.log(months1);

let lang = ["c","c++","html","javascript","python","java","c#"];
lang.push("sql");
lang.reverse();
console.log(lang.reverse().indexOf("javascript"));

//array references
let arr = ["a","b","c"];
let arrCopy = arr;
console.log(arr === arrCopy);

const g = 10; //constant
const arr1 = [1,2,3];

//nested arrays or multi dimensional arrays
let nums1 = [[1,2],[3,4],[4,5]];

//practice
let game = [ ['x',null,'O'],[null,'X',null],['O',null,'X']];
game[0][1] = 'O';
console.log(game);