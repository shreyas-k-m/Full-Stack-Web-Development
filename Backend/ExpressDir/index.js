const express = require("express");
const app = express();

//console.dir(app);

let port = 3000;

app.listen (port, () => { //expressJS
    console.log(`app is listining on port ${port}`);
});

// app.use((req,res) => { //sending request
//     //console.log(req);
//     console.log("request received");
//     res.send("this is a basic response"); //response
//     res.send( {
//         name:"apple",
//         color:"red",
//     });
//     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li><li>banana</li></ul>";
//     res.send(code)
// });

app.get("/",(req,res) => {
    res.send("hello i am root");
});

// app.get("/apple",(req,res) => { //routing
//     res.send("you contacted apple path");
// });

// app.get("/orange",(req,res) => {
//     res.send("you contacted orange path");
// });

// app.get("*",(req,res) => {
//     res.send("this path does not exists");
// });

// app.post("/",(req,res) => {
//     res.send("you sent a post request to root");
// });

app.get("/:username/:id",(req,res) => {
    let{username, id} = req.params;
    res.send(`welcome to the page of @${username}`);
});

app.get("/search",(req,res) => {
    let {q} = req.query;
    if(!q) {
        res.send("nothing searched")
    }
    res.send(`search results for query ${q}`);
});