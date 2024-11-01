//Object Literals
const student = {
    name: "shradha",
    age: 23,
    marks:94.4,
    city: "Delhi"
};
console.log(student);

//practice
const post = {
    username: "@shreyas_31",
    content: "This is my first post",
    likes: 150,
    reposts: 5,
    tags: ["@apnacollege","@delta"]
};
console.log(post);

console.log(post.username); //get value

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};
console.log(obj); //keys to string

student.city = "Mumbai"; //update
student.gender = "female"; //add
student.marks = "A";
delete student.age; //delete
console.log(student);

//nested objects
const classInfo = {
    aman: {
        grade: "a+",
        city: "delhi"
    },
    shradha: {
        grade: "a",
        city: "puna"
    },
    karan: {
        grade: "b+",
        city: "blr"
    },
};
console.log(classInfo);
classInfo.shradha.city = "guragon"
console.log(classInfo.shradha);

//array of objects
const classInfo1 = [
    {
        name: "aman",
        grade: "a+",
        city:  "mumbai"
    },
    {
        name: "shradha",
        grade: "a",
        city:  "puna"
    },
    {
        name: "karan",
        grade: "b+",
        city:  "blr"
    }
];
console.log(classInfo1[0]);