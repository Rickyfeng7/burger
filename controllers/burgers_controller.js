var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  	res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
	burger.all(function(data) {
	    var hbsObject = {
	      burger_data: data
	    };
	    console.log(hbsObject);
	    res.render("index", hbsObject);
  	});
});


module.exports = router;