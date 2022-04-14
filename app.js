const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

const items = ["Get food", "Buy food", "Eat food"];
const workItems = [];

app.get("/", (req, res) => {
    // res.send("express works!");
    let today = new Date();
    let options = {
        weekday: 'long',
        day: '2-digit'
    };

    let day = today.toLocaleString("en-US", options);

    res.render("list", { listTitle: day, newListItems: items });

})

app.get("/work", (req, res) => {
    res.render("list", { listTitle: "Work Items", newListItems: workItems });
})

app.get("/about", (req, res) => {
    res.render("about");
})
app.post("/", (req, res) => {
    let item = req.body.newItem; // get the new item.
    let reqType = req.body.button; // Sniff on the button name

    // let the hacking begin!

    // Here we are dynamically collecting data from the button click nature
    // the button is dynamically names with the "listTitle" variable in the "list" template.
    if (reqType === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {       
        items.push(item);
        res.redirect("/");
    }

});

app.listen(3000, () => {
    console.log("serving on port 3000!");
});