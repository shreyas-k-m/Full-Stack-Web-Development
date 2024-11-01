let jsonRes =
'{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.","length":78}';

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

let student = {
    name: "shradha",
    marks:95,
};

console.log(JSON.stringify(student));

let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

fetch(url)
    .then((res) => {
        console.log(res);
        return res.json()
        })
        .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("ERROR = ",err);
    })

//usins async and await
async function getFacts1() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    } catch (e) {
        console.log("error - ",e);
    }
    console.log("bye");
}

let btn = document.querySelector("button");

btn,addEventListener("click",async () => {
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;

    let link = await getImage();
    //console.log(link);
    let img = document.querySelector("#result1");
    img.setAttribute("src",link);
    console.log(link);
});

async function getFacts() {// axios
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("error - ",e);
        return "No fact found"
    }
}

console.log(getFacts());

async function getImage() {// axios
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (e) {
        console.log("error - ",e);
        return "No image found"
    }
}

const url3 = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = {headers: {Accept:"application/json"}};
        let res = await axios.get(url, config);
        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

let url4 = "http://universities.hipolabs.com/search?name=";
let btn1 = document.querySelector("#uni");

btn1.addEventListener("click",async() => {
    let country = document.querySelector("input").value;
    console.log(country)
    getColleges();
})

//let country = "nepal";

async function getColleges(country) {
    try {
        let res = await axios.get(url4+country);
        console.log(res.data);
    } catch(e) {
        console.log("error : ",e);
        return [];
    }
}