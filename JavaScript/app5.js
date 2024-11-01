function hello() { //function
    console.log("hello");
}
hello(); //calling a function

function printName() {
    console.log("Apna College");
}
printName()

function print1to5() {
    for(let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
print1to5();

//practice
function rollDice() {
    let random = Math.floor(Math.random() * 6) + 1; //random number 
    console.log(random);
}
rollDice();
rollDice();
rollDice();

//function with arguments
function printInfo(name,age) {
    console.log(`${name}'s age is ${age},`);
}
printInfo("shradha",23);
printInfo("Karan");

//practice
function calcAvg(a,b,c) {
    let avg = (a+b+c)/3;
    console.log(avg);
}
calcAvg(2,4,6);

function printTable (n) { //print table
    for(let i = n; i <=n*10; i+=n) {
        console.log(i);
    }
}
printTable(2);

function sum(a,b) {
    return a+b; //return
}
let s = sum(sum(2,4),3);
console.log(s);

function isAdult(age) {
    if(age >= 18) {
        return "adult";
    } else {
        return "not adult";
    }
}
let age = isAdult(20)
console.log(age);

//practice
function getSum(n) {
    let sum = 0;
    for(let i = 1;i <= n; i++) {
        sum += i;
    }
    return sum;
}
let sum1 = getSum(3);
console.log(sum1);

//practice
let greet = "hello"; //Global scope

function changeGreet() { //function scope
    let greet = "namaste";
    console.log(greet);

    function innerGreet() { //block Scope
        console.log(greet); //lexical scope
    }
    innerGreet(); //lexical scope
}

console.log(greet);//Global scope
changeGreet();//function scope

let name = "shradha";

//higher order function
function multipleGreet(func, count) {
    for(i = 1;i <= count; i++) {
        func();
    }
}

let greet1 = function() {
    console.log("hello");
}
multipleGreet(greet1, 20);

//higher order function (returns a function)
let odd = function(n) {
    console.log(!(n%2 == 0));
}

let even = function(n) {
    console.log(n%2 == 0);
}

function oddOrEvenFactory(request) {
    if(request == "odd") {
        let odd = function(n) {
            console.log(!(n%2 == 0));
        }
        return odd;
    } else if(request == "even") {
        let even = function(n) {
            console.log(n%2 == 0);
        }
        return even;
    } else {
        console.log("wrong request");
    }
}

let request = "odd"; //even

let func = oddOrEvenFactory(request);
func(2)

//methods
const calculator = {
    num: 55,
    add: function(a,b) {
        return a+b;
    },
    sub: function(a,b) {
        return a-b;
    },
    mul: function(a,b) {
        return a*b;
    },
};

calculator.add(5,6)


const student = {
    name: "shradha",
    age: 23,
    eng: 95,
    math: 89,
    phy: 90,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3; //this keyword
        console.log(avg);
    }
}
console.log(student.getAvg());

//try and catch
//let a = 5;
try {
    console.log(a);
} catch(err) {
    console.log("caught an error");
    console.log(err);
}

const sum4 = (a,b) => { //arrow function
    console.log(a+b)
};
sum4(2,4);

const cube = n => {
    return n * n * n;
};
console.log(cube (2));

const mul = (a,b) => a*b; //implicit return

console.log("hi There!");

// setTimeout( () => { //set timeout
//     console.log("Apna College")
// }, 4000);

// console.log("Wlcome!");

// setInterval( () => { //set interval
//     console.log("Apna College")
// }, 2000);

//forEach
let arr2 = [1,2,3,4,5];
// let print = function(el) {
//     console.log(el);
// };
// arr2.forEach(print);

// arr2.forEach(function(el) {
//     console.log(el);
// });

arr2.forEach((el) => {
    console.log(el);
});

//map
let num = [1,2,3,4];
let double = num.map((el) => {
    return el *2;
});
console.log(double);

//filter
let nums = [1,2,3,4,5,6,2,9,1,10,12,11];
let ans  = nums.filter((el) => {
    return el % 2 == 0; //even -> true,odd -> false
});
console.log(ans);

//every
let arr3 = [2,4,6].every((el) => el%2 == 0);
console.log(arr3);
//some
let arr4 = [1,2,3,4].some((el) => el%2 == 0);
console.log(arr4);

//reducer
let nums1 = [1,2,3,4];
let finalval = nums1.reduce((res,el) => res+el);
console.log(finalval);

//maximun in a array
let arr5 = [1,4,2,5,6,7,2,9,2];

// let max = -1;

// for(let i = 0; i < arr5.length; i++) {
//     if(max < arr5[i]) {
//         max = arr5[i];
//     }
// }
// console.log(max);

let max = arr5.reduce((max,el) => {
    if(max < el) {
        return el;
    } else {
        return max;
    }
});
console.log(max);

//practice (check all no. is multiple or not)
let nums2 = [10,20,30,40];

let ans1 = nums2.every((el) => el % 10 == 0);

console.log(ans1);

let min = nums2.reduce((min , el) => {
    if(min < el) {
        return min;
    } else {
        return el;
    }
});
console.log(min);

//default value
function sum(a,b = 2) {
    return(a+b)
}
let defval = sum(1);
console.log(defval);

//spread
let arr = [1,2,3,1,2,3,0,1,2,3,1,2,3,0];
let min1 = Math.min(...arr);
console.log(min1);

//spread with literals
let arr6 = [1,2,3,4,5];
let newArr = [...arr6];
console.log(newArr);

let chars = [..."hello"];
console.log(chars);

//spread with object literals
let data = {
    email: "ironman@gmail.com",
    password: "abcd"
}

const dataCopy = {...data, id: 123};
console.log(dataCopy);

//rest
function sum5(...args) { //arguments
    for(let i = 0; i < args.length; i++) {
        console.log("you gave us: ",args[i]);
    }
}
sum5(1);
sum5(5);
sum5(4);
sum5(3);
sum5(2);

function min3(a,b,c,d) {
    console.log(arguments);
}
min3(1,2,3,4)

function min4(...args) {
    return args.reduce((min,el) => {
        if(min > el) {
            return el;
        } else {
            return min;
        }
    })
};
min4(1,2,3,4);


//destructuring
let names = ["tony", "bruce","peter","steve"];
// let winner = names[0];
// let runnerup = names[1];
// let secondrunnerup = names[2];

let[winner,runnerup, ...others] = names;
console.log(winner);
console.log(runnerup);
console.log(others);

//destructuring with objects
const student3 = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindhi","english","math","science"],
    username: "karaan@123",
    password: "abcd"
}

let {username: user,password: secret } = student3;
console.log(user);
console.log(secret);