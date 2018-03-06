var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burger_data", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burger_data", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burger_data", objColVals, condition, function(res) {
      cb(res);
    });
  }
}
module.exports = burger; 