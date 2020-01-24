var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    res.redirect("/burger");
});

router.get("/burger", function (req, res) {
    burger.all(function (burgerData) {
        console.log(burgerData)
        res.render("index", { burger_data: burgerData });
    });
});

router.post("/burger/create", function (req, res) {
    burger.create(req.body.burger_name, function (result) {
        res.redirect("/");
    });
});
router.put("/burger/:id", function (req, res) {
    burger.update(req.params.id, function (result) {
        console.log(result);

        res.sendStatus(200);
    });
});

module.exports = router;