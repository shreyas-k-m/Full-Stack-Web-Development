function hello() {  //call stack
    console.log("inside hello fnx");
    console.log("hello");
}

hello();

function demo() {
    console.log("calling hello fnx");
    hello();
}
console.log("calling demo fnx");
demo();
console.log("Done");

//visualizing the call stack
function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans =  two() + one();
    console.log(ans);
}

three();

let a = 25;
console.log(a);
let b = 10;
console.log(b);
console.log(a+b);

// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) { //callback hell
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red",1000, () =>{
//     changeColor("yellow",1000, () => {
//         changeColor("green",1000);
//     });
// });

// function savetoDb(data, success, failur) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4) {
//         success();
//     } else {
//         failur();
//     }
// }

// savetoDb("apna college", () => {
//     console.log("your data was saved");
//     savetoDb("hello world", () => {
//         console.log("success2: data saved");
//     }, () => {
//         console.log("failur2: weak connection");
//     })
// }, () => {
//     console.log("your data was not saved");
// });


function savetoDb(data) { //promises
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
            resolve("Success: data was saved");
        } else {
            reject("Failure: weak coonnection");
        }
    });
}

savetoDb("apna college")
.then(() => {
    console.log("promise was resolved");
})
.catch(() => {
    console.log("promisw was rejected");
})

//practice
// h1 = document.querySelector("h1");

// function changeColor(color, delay) { //callback hell
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("color changed!");
//         }, delay);
//     });
// }

// changeColor("red",1000)
// .then(() => {
//     console.log("red color was completed");
//     return changeColor("orange",1000);
// })
// .then(() => {
//     console.log("orange color was completed");
//     return changeColor("green",1000);
// })
// .then(() => {
//     console.log("green color was completed");
//     return changeColor("blue",1000);
// })
// .then(() => {
//     console.log("blue color was completed");
// })

//async function
async function greet() {
    //throw "404 page was not found";
    return "hello";
}

greet()
.then((result) => {
    console.log("promise was resolved");
    console.log("result was : ",result);
})
.catch((err) => {
    console.log("promise was rejected");
})

let demo1 = async () => {
    return 5;
}
demo1();

//await keyword
function getNum() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        },1000);
    });
}
async function demo2() {
    await getNum();
    await getNum();
    await getNum();
}

// demo2();

h1 = document.querySelector("h1");

function changeColor(color, delay) { //callback hell
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if(num > 3) {
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
        }, delay);
    });
}

async function demo3() {
    try {
        await changeColor("red",1000);
    await changeColor("orange",1000);
    await changeColor("green",1000);
    await changeColor("blue",1000);
    } catch (err) {
        console.log(err);
    }
    
    let a = 5;
    console.log(a);
    console.log("new no. = ",a + 3);
}

demo3();