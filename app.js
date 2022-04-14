const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // res.send("express works!");
    let today = new Date();
    let dayNumber = today.getDay();
    let day = "";

    let weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";

    if (dayNumber === 6 || dayNumber === 0) {
        // res.sendFile(__dirname + "/weekend.html");
        day = weekdays[dayNumber];
        // console.log(day);
    } else {
        // res.sendFile(__dirname + "/weekday.html");
        day = weekdays[dayNumber];
        // console.log(day);
    }

    res.render("list", { kindOfDay: day });

})

app.listen(3000, () => {
    console.log("serving on port 3000!");
});