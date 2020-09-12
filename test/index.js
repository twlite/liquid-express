const express = require("express");
const app = require("../index")(express());

app.get("/", (req, res) => {
    res.render("index", {
        name: "Snowflake",
        TemplateName: "Liquid Express"
    });
});

app.listen(3000, () => console.log("server started!"));