document.getElementById("jerry"); //select
let imgObj = document.getElementById("jerry");
console.log(imgObj);
console.dir(imgObj);

imgObj.src = "cat.jpg"; //manipulate
console.log(imgObj);

document.getElementsByClassName("tom");
let smallImages = document.getElementsByClassName("tom");
for(let i = 0; i < smallImages.length;i++) {
    console.dir(smallImages[i].src);
}

document.getElementsByTagName("p");
let tags = document.getElementsByTagName("p")[1];
console.log(tags);

console.dir(document.querySelector("h1"));

//property and methods
let para = document.querySelector("p");
console.log(para);
console.dir(para);
let inner = para.innerText;
let content = para.textContent;
let html =para.innerHTML;
console.dir(inner);
console.dir(content);
console.dir(html);
//manipulation
//para.innerHTML = "<b>abc</b>";

let img = document.getElementById('jerry'); //manipulating attributes
console.log(img);
img.getAttribute("id");
img.setAttribute("id", "spiderman");