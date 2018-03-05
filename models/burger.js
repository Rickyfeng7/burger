var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burger_data", function(res) {
      cb(res);
    });
  },
  create: function(name, condition, cb){
  	orm.create("burger_data", name, condition, function(res){
  		cb(res);
  	});
  },
  delete: function(condition, cb){
  	orm.delete("burger_data", condition, function(res){
  		cb(res);
  	});
  }
};
module.exports = burger; 