const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "I love coding"
    },
    {
        id: uuidv4(),
        username: "shreyaz",
        content: "Hard work is important to achieve success"
    },
    {
        id: uuidv4(),
        username: "rahul",
        content: "I love to code"
    },
];

// Correct root route to redirect to /posts
app.get("/", (req, res) => {
    res.redirect("/posts");
});

// Route to display all posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// Route to render form for creating new post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// Route to handle creating new post
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

// Route to display individual post details
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => p.id === id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
