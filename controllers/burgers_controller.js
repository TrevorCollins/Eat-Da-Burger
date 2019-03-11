var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/index", function (req, res) {
    burger.all(function (data) {
        console.log(data);
        res.render("index", data);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insert("name", req.body.name, function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    burger.update("id", req.params.id, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;