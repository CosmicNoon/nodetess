const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.get("/", (reg, res) => {
    var title = "Velkommen";
    var content = "uwu";

    res.render('pages/index', {
        title: title,
        content: content
    });
});